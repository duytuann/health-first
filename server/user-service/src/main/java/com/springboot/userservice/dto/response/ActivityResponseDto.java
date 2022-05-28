package com.springboot.userservice.dto.response;

import com.springboot.userservice.entity.Activity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ActivityResponseDto {
    private Integer id;

    private String name;

    private String startDate;

    private String endDate;

    private String conclusion;

    private Integer activityStateId;

    private Integer activityResultId;

    private String createdUser;

    private Integer facilityId;

    public ActivityResponseDto(Activity activity) {
        this.id = activity.getId();
        this.facilityId = activity.getFacility().getId();
        this.name = activity.getName();

        if (activity.getStartDate() != null)
            this.startDate = activity.getStartDate().toString();
        if (activity.getEndDate() != null)
            this.endDate = activity.getEndDate().toString();

        if (activity.getConclusion() != null)
            this.conclusion = activity.getConclusion();
        if (activity.getActivityState() != null)
            this.activityStateId = activity.getActivityState().getId();

        if (activity.getActivityResult() != null)
            this.activityResultId = activity.getActivityResult().getId();

        this.createdUser = activity.getCreatedUser().getUsername();
    }

}