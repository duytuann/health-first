package com.springboot.userservice.repository;

import com.springboot.userservice.entity.SampleState;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SampleStateRepository extends JpaRepository<SampleState, Long> {
    SampleState findById(Integer Id);

}