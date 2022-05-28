package com.springboot.userservice.dto.response;

import java.util.List;
import java.util.stream.Collectors;

import com.springboot.userservice.entity.Plan;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlanResponseDto {
    private Integer id;

    private String name;

    private Integer planStateId;

    private String publishedDate;

    private String createdUser;

    private Integer createdUserId;

    private List<Integer> facilityIds;

    private String description;

    public PlanResponseDto(Plan plan) {
        this.id = plan.getId();
        this.name = plan.getName();
        this.planStateId = plan.getPlanState().getId();
        this.description = plan.getDescription();
        this.publishedDate = plan.getPublishedDate().toString();
        this.createdUser = plan.getCreatedUser().getUsername();
        this.createdUserId = plan.getCreatedUser().getId();
        this.facilityIds = plan.getFacilities().stream()
                .map(facility -> facility.getId()).collect(Collectors.toList());
    }

}