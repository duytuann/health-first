package com.springboot.userservice.repository;

import com.springboot.userservice.entity.FacilityState;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilityStateRepository extends JpaRepository<FacilityState, Long> {
    FacilityState findById(Integer id);

    FacilityState findByName(String name);
}
