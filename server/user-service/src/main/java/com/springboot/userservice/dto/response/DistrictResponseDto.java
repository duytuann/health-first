package com.springboot.userservice.dto.response;

import com.springboot.userservice.entity.District;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DistrictResponseDto {
    private Integer id;
    private String name;

    public DistrictResponseDto(District district) {
        this.id = district.getId();
        this.name = district.getName();
    }
}