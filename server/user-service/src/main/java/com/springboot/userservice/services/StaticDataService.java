package com.springboot.userservice.services;

import java.util.List;

import com.springboot.userservice.dto.response.DistrictResponseDto;
import com.springboot.userservice.dto.response.FoodResponseDto;
import com.springboot.userservice.dto.response.InspectionUnitResponseDto;
import com.springboot.userservice.dto.response.ProvinceResponseDto;
import com.springboot.userservice.dto.response.WardResponseDto;
import com.springboot.userservice.entity.District;
import com.springboot.userservice.entity.Food;
import com.springboot.userservice.entity.InspectionUnit;
import com.springboot.userservice.entity.Province;
import com.springboot.userservice.entity.Ward;

/**
 * StaticDataService
 */
public interface StaticDataService {

    public List<ProvinceResponseDto> getProvinces();

    public List<DistrictResponseDto> getDistrictsByProvince(int provinceId);

    public List<WardResponseDto> getWardsByDistrict(int districtId);

    public Province getProvinceById(int provinceId);

    public District getDistrictById(int districtId);

    public Ward getWardById(int wardId);

    public List<FoodResponseDto> getFoods();

    public List<InspectionUnitResponseDto> getInspectionUnits();

    public InspectionUnit getInspectionUnitById(int id);

    public Food getFoodById(int id);

}