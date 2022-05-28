package com.springboot.userservice.repository;

import java.util.List;

import com.springboot.userservice.entity.District;
import com.springboot.userservice.entity.Province;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DistrictRepository extends JpaRepository<District, Long> {
    District findById(Integer id);

    District findByName(String name);

    List<District> findAllByProvince(Province province);

}
