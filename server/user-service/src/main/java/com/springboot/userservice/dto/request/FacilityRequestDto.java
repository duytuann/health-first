package com.springboot.userservice.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FacilityRequestDto {

    private Integer id;

    private String facilityCode;

    private String name;

    private Integer facilityStateId;

    private Integer businessTypeId;

    private String address;

    private Integer wardId;

}