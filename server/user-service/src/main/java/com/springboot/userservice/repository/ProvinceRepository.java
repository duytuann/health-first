package com.springboot.userservice.repository;

import com.springboot.userservice.entity.Province;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProvinceRepository extends JpaRepository<Province, Long> {
    Province findByName(String name);

    Province findById(Integer Id);

}
