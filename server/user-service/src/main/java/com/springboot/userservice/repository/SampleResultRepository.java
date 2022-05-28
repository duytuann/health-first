package com.springboot.userservice.repository;

import com.springboot.userservice.entity.SampleResult;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SampleResultRepository extends JpaRepository<SampleResult, Long> {
    SampleResult findById(Integer Id);

}