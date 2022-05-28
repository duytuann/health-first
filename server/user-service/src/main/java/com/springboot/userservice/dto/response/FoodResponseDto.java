package com.springboot.userservice.dto.response;

import com.springboot.userservice.entity.Food;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FoodResponseDto {

    private Integer id;

    private String name;

    private String description;

    public FoodResponseDto(Food food) {
        this.id = food.getId();
        this.name = food.getName();
        this.description = food.getDescription();
    }
}