package com.springboot.userservice.controllers;

import java.net.URI;
import java.sql.Date;

import com.springboot.userservice.dto.request.ActivityRequestDto;
import com.springboot.userservice.dto.request.SearchFilterRequest;
import com.springboot.userservice.dto.response.BaseResponse;
import com.springboot.userservice.entity.Activity;
import com.springboot.userservice.entity.ActivityResult;
import com.springboot.userservice.entity.ActivityState;
import com.springboot.userservice.entity.AppUser;
import com.springboot.userservice.entity.Facility;
import com.springboot.userservice.entity.Plan;
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
@RequestMapping(path = "/api/activities")
@RequiredArgsConstructor
public class ActivityController {

    private final ActivityService activityService;

    private final UserService userService;

    private final FacilityService facilityService;

    private final PlanService planService;

    private final JwtTokenUtils jwtTokenUtils;

    @PostMapping("/list")
    public ResponseEntity<?> getAllActivities(@RequestHeader("Authorization") String userToken,
            @RequestBody SearchFilterRequest searchFilterRequest) {
        return ResponseEntity.ok()
                .body(new BaseResponse("1", "success",
                        activityService.getAllActivitiesWithFilter(searchFilterRequest)));
    }

    @PostMapping("/create")
    public ResponseEntity<?> addActivity(@RequestHeader(name = "Authorization") String userToken,
            @RequestBody ActivityRequestDto activityDto) {
        // facilityService.addFacility(payload);
        URI uri = URI
                .create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/activities/create")
                        .toUriString());

        Activity activity = new Activity();

        // set name
        activity.setName(activityDto.getName());

        // set created user
        userToken = userToken.substring("Bearer ".length() + JwtTokenUtils.preToken.length());
        String username = jwtTokenUtils.getUsernameFromToken(userToken);
        activity.setCreatedUser(userService.getCurrentUserByName(username));

        activity.setCreatedDate(new Date(System.currentTimeMillis()));
        if (activityDto.getStartDate() != null)
            activity.setStartDate(Date.valueOf(activityDto.getStartDate()));

        if (activityDto.getEndDate() != null)
            activity.setEndDate(Date.valueOf(activityDto.getEndDate()));

        // set conclusion
        activity.setConclusion(activityDto.getConclusion());

        // set activity result and state
        if (activityDto.getActivityResultId() != null)
            activity.setActivityResult(activityService.getActivityResultById(activityDto.getActivityResultId()));

        if (activityService.getActivityStateById(activityDto.getActivityStateId()) != null)
            activity.setActivityState(activityService.getActivityStateById(activityDto.getActivityStateId()));

        // // set facility
        // activity.setFacility(facilityService.getFacilityById(activityDto.getFacilityId()));

        // // set plan
        // activity.setPlan(planService.getPlanById(activityDto.getPlanId()));

        activityService.saveActivity(activity);

        BaseResponse response = new BaseResponse("1", "success", activity);
        return ResponseEntity.created(uri).body(response);
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateActivity(@RequestBody ActivityRequestDto activityDto) {
        // facilityService.addFacility(payload);
        URI uri = URI
                .create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/activities/update")
                        .toUriString());

        Activity activity = activityService.getActivityById(activityDto.getId());

        if (activity == null) {
            // return activity not found with requested id.
            return ResponseEntity.badRequest()
                    .body(new BaseResponse("0", "Activity not found with id: " + activityDto.getId(), ""));
        }

        // set name if exists.
        String name = activityDto.getName();
        if (name != null)
            activity.setName(name);

        // set created user if exists.
        AppUser createdUser = userService.getCurrentUserById(activityDto.getCreatedUserId());
        if (createdUser != null)
            activity.setCreatedUser(createdUser);

        // set created, start, end date if exists.
        if (activityDto.getCreatedDate() != null) {
            Date createdDate = Date.valueOf(activityDto.getCreatedDate());
            activity.setCreatedDate(createdDate);
        }
        if (activityDto.getStartDate() != null) {
            Date startDate = Date.valueOf(activityDto.getStartDate());
            activity.setStartDate(startDate);
        }
        if (activityDto.getEndDate() != null) {
            Date endDate = Date.valueOf(activityDto.getEndDate());
            activity.setEndDate(endDate);
        }

        // set conclusion if exist.
        String conclusion = activityDto.getConclusion();
        if (conclusion != null)
            activity.setConclusion(conclusion);

        // set activity result and state if exist.
        ActivityResult result = activityService.getActivityResultById(activityDto.getActivityResultId());
        if (result != null)
            activity.setActivityResult(result);
        ActivityState state = activityService.getActivityStateById(activityDto.getActivityStateId());
        if (state != null)
            activity.setActivityState(state);

        // set facility if exist.
        Facility facility = facilityService.getFacilityById(activityDto.getFacilityId());
        if (facility != null)
            activity.setFacility(facility);

        // set plan if exist.
        Plan plan = planService.getPlanById(activityDto.getPlanId());
        if (plan != null)
            activity.setPlan(plan);

        activityService.saveActivity(activity);

        return ResponseEntity.created(uri).body(new BaseResponse("1", "success", ""));
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteActivity(@RequestBody ActivityRequestDto activityRequestDto) {
        URI uri = URI
                .create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/activities/delete")
                        .toUriString());

        Activity activity = activityService.getActivityById(activityRequestDto.getId());

        if (activity == null) {
            // return activity not found with requested id.
            return ResponseEntity.badRequest()
                    .body(new BaseResponse("0", "Activity not found with id: " + activityRequestDto.getId(), ""));
        }

        activityService.deleteActivityById(activity.getId());

        BaseResponse response = new BaseResponse("1",
                "Delete certificate success", "");

        return ResponseEntity.created(uri).body(response);
    }

}