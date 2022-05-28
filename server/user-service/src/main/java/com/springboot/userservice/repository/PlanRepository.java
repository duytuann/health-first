package com.springboot.userservice.repository;

import java.util.List;

import com.springboot.userservice.entity.Plan;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Long> {
    Plan findById(Integer Id);

    Plan findByName(String name);

    @Procedure(procedureName = "deletePlan")
    int deleteById(Integer id);

    @Procedure(procedureName = "updatePlanFacility")
    Long updateFacilityFromPlan(Integer planId, String facilityIds);

    @Procedure(procedureName = "getPlanWithFilter")
    List<Plan> findAllPlanWithFilter(String filter);

}