package com.springboot.userservice.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegionDto {
    private String username;
    private Integer wardId;
    private Integer districtId;
    private Integer provinceId;
}