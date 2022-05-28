package com.springboot.userservice.repository;

import java.util.List;

import com.springboot.userservice.entity.Sample;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

@Repository
public interface SampleRepository extends JpaRepository<Sample, Long> {

    @Procedure(procedureName = "getSampleWithFilter")
    List<Sample> findAllSampleWithFilter(String filter);

    Sample findById(Integer Id);

    Sample findBySampleCode(String name);

    Sample findTopByOrderByIdDesc();

    Long deleteById(Integer Id);

    Long deleteBySampleCode(String name);

}