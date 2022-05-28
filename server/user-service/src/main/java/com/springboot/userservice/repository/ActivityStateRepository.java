package com.springboot.userservice.repository;

import com.springboot.userservice.entity.ActivityState;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityStateRepository extends JpaRepository<ActivityState, Long> {
    ActivityState findById(Integer Id);

    ActivityState findByName(String name);

    Long deleteById(Integer Id);
}