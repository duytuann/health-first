package com.springboot.userservice.repository;

import com.springboot.userservice.entity.InspectionUnit;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * InspectionUnitRepository
 */
public interface InspectionUnitRepository extends JpaRepository<InspectionUnit, Long> {
    InspectionUnit findById(Integer Id);

    Long deleteById(Integer Id);

}