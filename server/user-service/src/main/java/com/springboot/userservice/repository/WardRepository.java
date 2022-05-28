package com.springboot.userservice.repository;

import java.util.List;

import com.springboot.userservice.entity.District;
import com.springboot.userservice.entity.Ward;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WardRepository extends JpaRepository<Ward, Long> {
    Ward findByName(String name);

    Ward findById(Integer id);

    List<Ward> findAllByDistrict(District district);
}
