package com.springboot.userservice.services;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import com.google.gson.Gson;
import com.springboot.userservice.dto.request.SearchFilterRequest;
import com.springboot.userservice.dto.response.AppUserResponseDto;
import com.springboot.userservice.entity.AppRole;
import com.springboot.userservice.entity.AppUser;
import com.springboot.userservice.entity.District;
import com.springboot.userservice.entity.Province;
import com.springboot.userservice.entity.Ward;
import com.springboot.userservice.repository.AppRoleRepository;
import com.springboot.userservice.repository.AppUserRepository;
import com.springboot.userservice.repository.WardRepository;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService, UserDetailsService {
    private final AppUserRepository userRepository;
    private final AppRoleRepository roleRepository;
    private final WardRepository wardRepository;
    private final PasswordEncoder passwordEncoder;
    private final StaticDataService staticDataService;

    @Override
    public AppUser getCurrentUserByName(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public AppUser saveUser(AppUser user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public AppRole saveRole(AppRole role) {
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String username, Integer roleId) {
        AppUser user = userRepository.findByUsername(username);
        AppRole role = roleRepository.findById(roleId);
        user.getRoles().add(role);
    }

    @Override
    public List<AppUserResponseDto> getUsers(SearchFilterRequest searchFilterRequest) {

        return userRepository.findAllUserWithFilter(new Gson().toJson(searchFilterRequest)).stream()
                .map(AppUserResponseDto::new).collect(Collectors.toList());
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        Collection<GrantedAuthority> grantedAuthorities = user.getRoles().stream()
                .map(role -> (GrantedAuthority) role::getName).collect(Collectors.toList());
        return new User(user.getUsername(), user.getPassword(), grantedAuthorities);
    }

    @Override
    public void addWardToUser(Integer id, String username) {
        AppUser user = userRepository.findByUsername(username);
        Ward ward = wardRepository.findById(id);
        user.getWards().add(ward);
    }

    @Override
    public AppUser getCurrentUserById(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public int deleteUserById(Integer id) {
        return userRepository.deleteUserById(id);
    }

    @Override
    public void removeRoleFromUser(String username, Integer id) {
        AppUser user = userRepository.findByUsername(username);
        AppRole role = roleRepository.findById(id);
        user.getRoles().remove(role);
    }

    @Override
    public void removeRegionFromUser(String username, Integer Id) {
        AppUser user = userRepository.findByUsername(username);
        Ward ward = wardRepository.findById(Id);
        user.getWards().remove(ward);
    }

    @Override
    public void addDistrictToUser(Integer id, String username) {
        District district = staticDataService.getDistrictById(id);
        AppUser user = userRepository.findByUsername(username);
        for (Ward ward : district.getWards()) {
            user.getWards().add(ward);
        }
    }

    @Override
    public void addProvinceToUser(Integer id, String username) {
        Province province = staticDataService.getProvinceById(id);
        AppUser user = userRepository.findByUsername(username);
        for (District district : province.getDistricts()) {
            for (Ward ward : district.getWards()) {
                user.getWards().add(ward);
            }
        }
    }

    @Override
    public void removeWardFromUser(Integer id, String username) {
        Ward ward = wardRepository.findById(id);
        AppUser user = userRepository.findByUsername(username);
        user.getWards().remove(ward);
    }

    @Override
    public void removeDistrictFromUser(Integer id, String username) {
        District district = staticDataService.getDistrictById(id);
        AppUser user = userRepository.findByUsername(username);
        for (Ward ward : district.getWards()) {
            user.getWards().remove(ward);
        }
    }

    @Override
    public void removeProvinceFromUser(Integer id, String username) {
        Province province = staticDataService.getProvinceById(id);
        AppUser user = userRepository.findByUsername(username);
        for (District district : province.getDistricts()) {
            for (Ward ward : district.getWards()) {
                user.getWards().remove(ward);
            }
        }
    }
}
