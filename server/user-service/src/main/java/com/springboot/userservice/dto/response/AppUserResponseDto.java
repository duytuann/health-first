package com.springboot.userservice.dto.response;

import java.util.List;
import java.util.stream.Collectors;

import com.springboot.userservice.entity.AppUser;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AppUserResponseDto {

    private Integer id;

    private String displayName;

    private String username;

    private String email;

    private String phoneNumber;

    private List<Integer> roles;

    private List<String> wards;

    private List<String> districts;

    private List<String> provinces;

    private String createdDate;

    public AppUserResponseDto(AppUser appUser) {
        this.id = appUser.getId();
        this.displayName = appUser.getDisplayName();
        this.username = appUser.getUsername();
        this.email = appUser.getEmail();
        // use built in function :: getId
        this.roles = appUser.getRoles().stream().map(role -> role.getId())
                .collect(Collectors.toList());
        this.phoneNumber = appUser.getPhoneNumber();
        this.createdDate = appUser.getCreatedDate().toString();
        this.wards = appUser.getWards().stream().map(ward -> ward.getName())
                .collect(Collectors.toList());

        this.districts = appUser.getWards().stream().map(ward -> ward.getDistrict().getName())
                .collect(Collectors.toSet()).stream()
                .collect(Collectors.toList());

        this.provinces = appUser.getWards().stream().map(ward -> ward.getDistrict().getProvince().getName())
                .collect(Collectors.toSet()).stream()
                .collect(Collectors.toList());

    }
}