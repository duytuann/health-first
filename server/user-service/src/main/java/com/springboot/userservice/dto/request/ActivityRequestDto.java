package com.springboot.userservice.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActivityRequestDto {

    private Integer id;

    private String name;

    private String createdDate;

    private String startDate;

    private String endDate;

    private String conclusion;

    private Integer activityStateId;

    private Integer activityResultId;

    private Integer createdUserId;

    private Integer facilityId;

    private Integer planId;

}