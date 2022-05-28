package com.springboot.userservice.repository;

import com.springboot.userservice.entity.PlanState;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * PlanStateRepository
 */
public interface PlanStateRepository extends JpaRepository<PlanState, Long> {
    PlanState findById(Integer id);

    PlanState findByName(String name);

    Long deleteById(Integer id);
}