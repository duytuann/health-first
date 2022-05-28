package com.springboot.userservice.dto.response;

import com.springboot.userservice.entity.Facility;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FacilityResponseDto {

    private Integer id;

    private String facilityCode;

    private String name;

    private Integer FacilityStateId;

    private String businessType;

    private String address;

    private String province;

    private String district;

    private String ward;

    public FacilityResponseDto(Facility facility) {
        this.id = facility.getId();
        this.facilityCode = facility.getFacilityCode();
        this.name = facility.getName();
        this.FacilityStateId = facility.getFacilityState().getId();
        this.businessType = facility.getBusinessType().getName();
        this.address = facility.getAddress().getName();
        this.province = facility.getAddress().getWard().getDistrict().getProvince().getName();
        this.district = facility.getAddress().getWard().getDistrict().getName();
        this.ward = facility.getAddress().getWard().getName();
    }

}