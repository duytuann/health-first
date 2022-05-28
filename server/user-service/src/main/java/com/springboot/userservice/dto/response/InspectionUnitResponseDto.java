package com.springboot.userservice.dto.response;

import com.springboot.userservice.entity.InspectionUnit;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InspectionUnitResponseDto {

    private Integer id;

    private String name;

    public InspectionUnitResponseDto(InspectionUnit inspectionUnit) {
        this.id = inspectionUnit.getId();
        this.name = inspectionUnit.getName();
    }

}