package com.springboot.userservice.repository;

import com.springboot.userservice.entity.Food;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * FoodRepository
 */
public interface FoodRepository extends JpaRepository<Food, Long> {
    Food findById(Integer Id);

    Long deleteById(Integer Id);

}