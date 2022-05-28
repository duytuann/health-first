package com.springboot.userservice.controllers;

import java.net.URI;
import java.sql.Date;
import java.util.Set;

import com.springboot.userservice.dto.request.PlanRequestDto;
import com.springboot.userservice.dto.request.SearchFilterRequest;
import com.springboot.userservice.dto.response.BaseResponse;
import com.springboot.userservice.entity.Activity;
import com.springboot.userservice.entity.Facility;
import com.springboot.userservice.entity.Plan;
import com.springboot.userservice.entity.PlanState;
import com.springboot.userservice.services.ActivityService;
import com.springboot.userservice.services.FacilityService;
import com.springboot.userservice.services.PlanService;
import com.springboot.userservice.services.UserService;
import com.springboot.userservice.utils.JwtTokenUtils;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(path = "/api/plans")
@RequiredArgsConstructor
public class PlanController {

    private final PlanService planService;

    private final FacilityService facilityService;

    private final UserService userService;

    private final JwtTokenUtils jwtTokenUtils;

    private final ActivityService activityService;

    @PostMapping("/list")
    public ResponseEntity<?> getAllPlans(@RequestHeader("Authorization") String userToken,
            @RequestBody SearchFilterRequest searchFilterRequest) {

        userToken = userToken.substring("Bearer ".length() + JwtTokenUtils.preToken.length());
        String username = jwtTokenUtils.getUsernameFromToken(userToken);

        searchFilterRequest.setUserId(userService.getCurrentUserByName(username).getId());
        BaseResponse response = new BaseResponse("1", "Get plans successfully",
                planService.getAllPlans(searchFilterRequest));

        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/create")
    public ResponseEntity<?> addPlan(@RequestHeader(name = "Authorization") String userToken,
            @RequestBody PlanRequestDto planRequestDto) {

        URI uri = URI
                .create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/plans/create")
                        .toUriString());

        Plan plan = new Plan();

        // set name.
        plan.setName(planRequestDto.getName());

        // set created user.
        userToken = userToken.substring("Bearer ".length() + JwtTokenUtils.preToken.length());
        String username = jwtTokenUtils.getUsernameFromToken(userToken);
        plan.setCreatedUser(userService.getCurrentUserByName(username));

        // set created date.
        plan.setPublishedDate(new Date(System.currentTimeMillis()));

        // set description.
        if (planRequestDto.getDescription() != null)
            plan.setDescription(planRequestDto.getDescription());

        // set plan state.
        plan.setPlanState(planService.getPlanStateById(planRequestDto.getPlanStateId()));

        planRequestDto.getFacilityIds().stream().map(id -> facilityService.getFacilityById(id))
                .forEach(facility -> plan.getFacilities().add(facility));

        planService.savePlan(plan);
        planService.updateFacilityFromPlan(plan.getId(), planRequestDto.getFacilityIds());

        return ResponseEntity.created(uri).body(new BaseResponse("1", "Create plan successfully", ""));

    }

    @PostMapping("/update")
    public ResponseEntity<?> updatePlan(@RequestBody PlanRequestDto planRequestDto) {

        URI uri = URI
                .create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/plans/update")
                        .toUriString());

        Plan plan = planService.getPlanById(planRequestDto.getId());
        if (plan == null) {
            // return a error message.
            return ResponseEntity.badRequest()
                    .body(new BaseResponse("0", "Plan with id " + planRequestDto.getId() + " not found", ""));
        }

        // set name if exist.
        String name = planRequestDto.getName();
        if (name != null)
            plan.setName(name);

        if (planRequestDto.getPublishedDate() != null) {
            Date publishedDate = Date.valueOf(planRequestDto.getPublishedDate());
            plan.setPublishedDate(publishedDate);
        }

        // set description if exist.
        String description = planRequestDto.getDescription();
        if (description != null)
            plan.setDescription(description);

        // set plan state if exist.
        if (planRequestDto.getPlanStateId() != null) {
            PlanState planState = planService.getPlanStateById(planRequestDto.getPlanStateId());
            plan.setPlanState(planState);
        }

        planService.updateFacilityFromPlan(plan.getId(), planRequestDto.getFacilityIds());
        planService.savePlan(plan);

        return ResponseEntity.created(uri).body(new BaseResponse("1", "Update plan successfully", ""));
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteFacility(@RequestBody PlanRequestDto planRequestDto) {
        URI uri = URI
                .create(ServletUriComponentsBuilder.fromCurrentContextPath()
                        .path("/api/plans/delete")
                        .toUriString());
        planService.deletePlanById(planRequestDto.getId());

        return ResponseEntity.created(uri).body(new BaseResponse("1", "Delete plan successfully", ""));
    }

    @PostMapping("/active")
    public ResponseEntity<?> activePlan(@RequestHeader(name = "Authorization") String userToken,
            @RequestBody PlanRequestDto planRequestDto) {
        URI uri = URI
                .create(ServletUriComponentsBuilder.fromCurrentContextPath()
                        .path("/api/plans/active")
                        .toUriString());

        Plan plan = planService.getPlanById(planRequestDto.getId());
        userToken = userToken.substring("Bearer ".length() + JwtTokenUtils.preToken.length());
        String username = jwtTokenUtils.getUsernameFromToken(userToken);
        Set<Facility> facilities = plan.getFacilities();
        plan.setPlanState(planService.getPlanStateById(1));

        facilities.stream().map(facility -> {
            Activity activity = new Activity();
            activity.setName(plan.getName() + "_" + facility.getName());
            activity.setCreatedDate(new Date(System.currentTimeMillis()));
            activity.setPlan(plan);
            activity.setCreatedUser(userService.getCurrentUserByName(username));
            activity.setActivityState(activityService.getActivityStateById(1));
            activity.setFacility(facility);
            return activity;
        }).forEach(activity -> activityService.saveActivity(activity));

        return ResponseEntity.created(uri).body(new BaseResponse("1", "Active plan successfully", ""));
    }

}