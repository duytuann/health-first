package com.springboot.userservice.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import com.google.gson.Gson;
import com.springboot.userservice.dto.request.SearchFilterRequest;
import com.springboot.userservice.dto.response.PlanResponseDto;
import com.springboot.userservice.entity.Facility;
import com.springboot.userservice.entity.Plan;
import com.springboot.userservice.entity.PlanState;
import com.springboot.userservice.repository.PlanRepository;
import com.springboot.userservice.repository.PlanStateRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class PlanServiceImpl implements PlanService {

    private final PlanRepository planRepository;

    private final PlanStateRepository planStateRepository;

    private final FacilityService facilityService;

    @Override
    public Plan savePlan(Plan plan) {
        return planRepository.save(plan);
    }

    @Override
    public List<PlanResponseDto> getAllPlans(SearchFilterRequest searchFilterRequest) {
        return planRepository.findAllPlanWithFilter(new Gson().toJson(searchFilterRequest))
                .stream().map(PlanResponseDto::new).collect(Collectors.toList());
    }

    @Override
    public Plan getPlanById(Integer id) {
        return planRepository.findById(id);
    }

    @Override
    public PlanState getPlanStateById(Integer id) {
        return planStateRepository.findById(id);
    }

    @Override
    public int deletePlanById(Integer id) {
        return planRepository.deleteById(id);
    }

    @Override
    public void updateFacilityFromPlan(Integer planId, List<Integer> facilityIds) {

        Plan plan = planRepository.findById(planId);
        for (Integer facilityId : facilityIds) {
            Facility facility = facilityService.getFacilityById(facilityId);
            if (!plan.getFacilities().contains(facility)) {
                plan.getFacilities().add(facility);
            }
        }

        // remove all facilities except for the ones in the list
        List<Facility> facilities = plan.getFacilities().stream()
                .collect(Collectors.toList());
        for (Facility facility : facilities) {
            if (!facilityIds.contains(facility.getId())) {
                plan.getFacilities().remove(facility);
            }
        }

    }

}