package com.springboot.userservice.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchFilterRequest {

    private Integer userId;

    private Integer facilityStateId;

    private Integer certificateStateId;

    private Integer businessTypeId;

    private Integer provinceId;

    private Integer districtId;

    private Integer wardId;

    private Integer planStateId;

    private Integer activityStateId;

    private Integer activityResultId;

    private Integer sampleStateId;

    private Integer sampleResultId;

    private Integer inspectionUnitId;

    private Integer foodId;

    private String activityName;

    private String phoneNumber;

    private String email;

    private String username;

    private String facilityName;

    private String planName;

}