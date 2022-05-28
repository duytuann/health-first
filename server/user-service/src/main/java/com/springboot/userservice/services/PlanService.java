package com.springboot.userservice.services;

import java.util.List;

import com.springboot.userservice.dto.request.SearchFilterRequest;
import com.springboot.userservice.dto.response.PlanResponseDto;
import com.springboot.userservice.entity.Plan;
import com.springboot.userservice.entity.PlanState;

import org.springframework.stereotype.Service;

@Service
public interface PlanService {

    public Plan savePlan(Plan plan);

    public List<PlanResponseDto> getAllPlans(SearchFilterRequest searchFilterRequest);

    public Plan getPlanById(Integer id);

    public PlanState getPlanStateById(Integer id);

    public int deletePlanById(Integer id);

    public void updateFacilityFromPlan(Integer planId, List<Integer> facilityIds);

}