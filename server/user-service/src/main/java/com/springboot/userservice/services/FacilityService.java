package com.springboot.userservice.services;

import java.util.List;

import com.springboot.userservice.dto.response.FacilityResponseDto;
import com.springboot.userservice.entity.Address;
import com.springboot.userservice.entity.AppUser;
import com.springboot.userservice.entity.BusinessType;
import com.springboot.userservice.entity.District;
import com.springboot.userservice.entity.Facility;
import com.springboot.userservice.entity.FacilityState;
import com.springboot.userservice.entity.Province;
import com.springboot.userservice.entity.Ward;

import org.springframework.stereotype.Service;

@Service
public interface FacilityService {

    public List<FacilityResponseDto> getAllFacilityByUser(AppUser user);

    public List<FacilityResponseDto> getAllFacilityWithFilter(String filter);

    public Facility saveFacility(Facility facility);

    public Facility getFacilityById(Integer id);

    public Facility getLastFacility();

    public FacilityState getFacilityStateById(Integer id);

    public FacilityState getFacilityStateByName(String name);

    public Long deleteFacility(Integer id);

    public BusinessType getBusinessTypeById(Integer id);

    public BusinessType getBusinessTypeByName(String name);

    public Address getAddressById(Integer Id);

    public Address saveAddress(Address address, Ward ward);

    public Province getProvinceById(Integer id);

    public Province saveProvince(Province province);

    public District saveDistrictByProvince(District district, Province province);

    public Ward saveWardByDistrict(Ward ward, District district);

    public Ward getWardById(Integer i);
}
