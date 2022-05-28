package com.springboot.userservice.repository;

import com.springboot.userservice.entity.ActivityResult;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ActivityResultRepository
 */
@Repository
public interface ActivityResultRepository extends JpaRepository<ActivityResult, Long> {
    ActivityResult findById(Integer Id);

    ActivityResult findByName(String name);

    Long deleteById(Integer Id);

}