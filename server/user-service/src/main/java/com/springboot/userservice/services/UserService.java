package com.springboot.userservice.services;

import java.util.List;

import com.springboot.userservice.dto.request.SearchFilterRequest;
import com.springboot.userservice.dto.response.AppUserResponseDto;
import com.springboot.userservice.entity.AppRole;
import com.springboot.userservice.entity.AppUser;

import org.springframework.stereotype.Service;

@Service
public interface UserService {
    AppUser getCurrentUserByName(String username);

    AppUser getCurrentUserById(Integer id);

    AppUser saveUser(AppUser user);

    int deleteUserById(Integer id);

    AppRole saveRole(AppRole role);

    void addRoleToUser(String username, Integer id);

    void removeRoleFromUser(String username, Integer id);

    List<AppUserResponseDto> getUsers(SearchFilterRequest searchFilterRequest);

    void addWardToUser(Integer id, String username);

    void addDistrictToUser(Integer id, String username);

    void addProvinceToUser(Integer id, String username);

    void removeWardFromUser(Integer id, String username);

    void removeDistrictFromUser(Integer id, String username);

    void removeProvinceFromUser(Integer id, String username);

    void removeRegionFromUser(String username, Integer Id);

}
