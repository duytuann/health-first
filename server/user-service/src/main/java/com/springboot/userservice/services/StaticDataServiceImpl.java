package com.springboot.userservice.services;

import java.util.List;
import java.util.stream.Collectors;

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
import com.springboot.userservice.repository.DistrictRepository;
import com.springboot.userservice.repository.FoodRepository;
import com.springboot.userservice.repository.InspectionUnitRepository;
import com.springboot.userservice.repository.ProvinceRepository;
import com.springboot.userservice.repository.WardRepository;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class StaticDataServiceImpl implements StaticDataService {
    private final ProvinceRepository provinceRepository;
    private final DistrictRepository districtRepository;
    private final WardRepository wardRepository;
    private final FoodRepository foodRepository;
    private final InspectionUnitRepository inspectionUnitRepository;

    public List<ProvinceResponseDto> getProvinces() {
        return provinceRepository.findAll(Sort.by(Sort.Direction.ASC,
                "id")).stream().map(ProvinceResponseDto::new).collect(Collectors.toList());

    }

    public List<DistrictResponseDto> getDistrictsByProvince(int provinceId) {
        return districtRepository.findAllByProvince(provinceRepository.findById(provinceId)).stream()
                .map(DistrictResponseDto::new)
                .collect(Collectors.toList());

    }

    @Override
    public List<WardResponseDto> getWardsByDistrict(int districtId) {
        return wardRepository.findAllByDistrict(districtRepository.findById(districtId)).stream()
                .map(WardResponseDto::new)
                .collect(Collectors.toList());
    }

    @Override
    public List<FoodResponseDto> getFoods() {
        return foodRepository.findAll().stream().map(FoodResponseDto::new).collect(Collectors.toList());
    }

    @Override
    public List<InspectionUnitResponseDto> getInspectionUnits() {
        return inspectionUnitRepository.findAll().stream().map(InspectionUnitResponseDto::new)
                .collect(Collectors.toList());
    }

    @Override
    public InspectionUnit getInspectionUnitById(int id) {
        return inspectionUnitRepository.findById(id);
    }

    @Override
    public Food getFoodById(int id) {
        return foodRepository.findById(id);
    }

    @Override
    public Province getProvinceById(int provinceId) {
        return provinceRepository.findById(provinceId);
    }

    @Override
    public District getDistrictById(int districtId) {
        return districtRepository.findById(districtId);
    }

    @Override
    public Ward getWardById(int wardId) {
        return wardRepository.findById(wardId);
    }

}