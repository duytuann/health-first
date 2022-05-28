package com.springboot.userservice.repository;

import com.springboot.userservice.entity.BusinessType;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessTypeRepository extends JpaRepository<BusinessType, Long> {
    BusinessType findById(Integer id);

    BusinessType findByName(String name);
}
