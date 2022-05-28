package com.springboot.userservice.controllers;

import java.net.URI;
import java.sql.Date;
import java.util.List;

import com.springboot.userservice.dto.request.SampleRequestDto;
import com.springboot.userservice.dto.request.SearchFilterRequest;
import com.springboot.userservice.dto.response.BaseResponse;
import com.springboot.userservice.dto.response.SampleResponseDto;
import com.springboot.userservice.entity.Sample;
import com.springboot.userservice.services.ActivityService;
import com.springboot.userservice.services.SampleService;
import com.springboot.userservice.services.StaticDataService;
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
@RequestMapping(path = "/api/activities/samples")
@RequiredArgsConstructor
public class SampleController {

    private final SampleService sampleService;

    private final ActivityService activityService;

    private final StaticDataService staticDataService;

    private final UserService userService;

    private final JwtTokenUtils jwtTokenUtils;

    @PostMapping("/list")
    public ResponseEntity<?> getAllSamples(@RequestHeader(name = "Authorization") String userToken,
            @RequestBody SearchFilterRequest searchFilterRequest) {

        userToken = userToken.substring("Bearer ".length() + JwtTokenUtils.preToken.length());
        String username = jwtTokenUtils.getUsernameFromToken(userToken);
        searchFilterRequest.setUserId(userService.getCurrentUserByName(username).getId());

        List<SampleResponseDto> samples = sampleService.getAllSamplesWithFilter(searchFilterRequest);
        if (samples == null) {
            return ResponseEntity.badRequest().body(new BaseResponse("0", "No samples found", ""));
        }
        BaseResponse response = new BaseResponse("1", "Get all activities successfully",
                samples);

        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/create")
    public ResponseEntity<?> addSample(@RequestHeader(name = "Authorization") String userToken,
            @RequestBody SampleRequestDto sampleRequestDto) {
        // facilityService.addFacility(payload);
        URI uri = URI
                .create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/activities/samples/create")
                        .toUriString());

        Sample sample = new Sample();

        // set sample code.
        Sample lastSample = sampleService.getLastSample();
        sample.setSampleCode(Sample.SAMPLE_PREFIX + String.valueOf(lastSample.getId() + 1));

        // set created date.
        sample.setCreatedDate(new Date(System.currentTimeMillis()));

        if (sampleRequestDto.getResultedDate() != null)
            sample.setResultedDate(Date.valueOf(sampleRequestDto.getResultedDate()));

        if (sampleService.getSampleStateById(sampleRequestDto.getSampleStateId()) == null) {
            return ResponseEntity.badRequest().body(new BaseResponse("0", "Sample state is required", ""));
        }
        sample.setSampleState(sampleService.getSampleStateById(sampleRequestDto.getSampleStateId()));

        if (sampleService.getSampleResultById(sampleRequestDto.getSampleResultId()) == null) {
            return ResponseEntity.badRequest().body(new BaseResponse("0", "Sample result is required", ""));
        }
        sample.setSampleResult(sampleService.getSampleResultById(sampleRequestDto.getSampleResultId()));

        if (activityService.getActivityById(sampleRequestDto.getActivityId()) == null) {
            return ResponseEntity.badRequest().body(new BaseResponse("0", "Activity id is required", ""));
        }
        sample.setActivity(activityService.getActivityById(sampleRequestDto.getActivityId()));

        if (staticDataService.getInspectionUnitById(sampleRequestDto.getInspectionUnitId()) == null) {
            return ResponseEntity.badRequest().body(new BaseResponse("0", "Inspection unit id is required", ""));
        }
        sample.setInspectionUnit(staticDataService.getInspectionUnitById(sampleRequestDto.getInspectionUnitId()));

        if (staticDataService.getFoodById(sampleRequestDto.getFoodId()) == null) {
            return ResponseEntity.badRequest().body(new BaseResponse("0", "Food sample id is required", ""));
        }
        sample.setFood(staticDataService.getFoodById(sampleRequestDto.getFoodId()));

        sampleService.saveSample(sample);
        return ResponseEntity.created(uri).body(new BaseResponse("1", "Create sample successfully", ""));
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateSample(@RequestBody SampleRequestDto sampleRequestDto) {
        // facilityService.addFacility(payload);
        URI uri = URI
                .create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/activities/samples/update")
                        .toUriString());

        Sample sample = sampleService.getSampleById(sampleRequestDto.getId());

        if (sample == null) {
            return ResponseEntity.badRequest()
                    .body(new BaseResponse("0", "No sample with id " + sampleRequestDto.getId() + " found!", ""));
        }

        // set sampleCode
        if (sampleRequestDto.getSampleCode() != null)
            sample.setSampleCode(sampleRequestDto.getSampleCode());
        sample.setCreatedDate(new Date(System.currentTimeMillis()));

        if (sampleRequestDto.getResultedDate() != null)
            sample.setResultedDate(Date.valueOf(sampleRequestDto.getResultedDate()));

        if (sampleService.getSampleStateById(sampleRequestDto.getSampleStateId()) != null)
            sample.setSampleState(sampleService.getSampleStateById(sampleRequestDto.getSampleStateId()));

        if (sampleService.getSampleResultById(sampleRequestDto.getSampleResultId()) != null)
            sample.setSampleResult(sampleService.getSampleResultById(sampleRequestDto.getSampleResultId()));

        if (activityService.getActivityById(sampleRequestDto.getActivityId()) != null)
            sample.setActivity(activityService.getActivityById(sampleRequestDto.getActivityId()));

        if (staticDataService.getInspectionUnitById(sampleRequestDto.getInspectionUnitId()) != null)
            sample.setInspectionUnit(staticDataService.getInspectionUnitById(sampleRequestDto.getInspectionUnitId()));

        if (staticDataService.getFoodById(sampleRequestDto.getFoodId()) != null)
            sample.setFood(staticDataService.getFoodById(sampleRequestDto.getFoodId()));

        sampleService.saveSample(sample);
        BaseResponse response = new BaseResponse("1", "Update sample successfully", "");
        return ResponseEntity.created(uri).body(response);
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteSample(@RequestBody SampleRequestDto sampleRequestDto) {
        // facilityService.addFacility(payload);
        URI uri = URI
                .create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/activities/samples/delete")
                        .toUriString());

        Sample sample = sampleService.getSampleById(sampleRequestDto.getId());

        if (sample == null) {
            return ResponseEntity.badRequest()
                    .body(new BaseResponse("0", "No sample with id " + sampleRequestDto.getId() + " found!", ""));
        }

        sampleService.deleteSampleById(sample.getId());
        BaseResponse response = new BaseResponse("1", "Delete sample successfully", "");
        return ResponseEntity.created(uri).body(response);
    }

}