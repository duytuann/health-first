package com.springboot.userservice.repository;

import java.util.List;

import com.springboot.userservice.entity.Activity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
    Activity findById(Integer Id);

    Activity findByName(String name);

    Long deleteById(Integer Id);

    @Procedure(procedureName = "getActivityWithFilter")
    List<Activity> getAllActivitiesWithFilter(String filter);

}