package com.springboot.userservice.controllers;

import java.net.URI;
import java.util.List;

import com.google.gson.Gson;
import com.springboot.userservice.dto.request.FacilityRequestDto;
import com.springboot.userservice.dto.request.SearchFilterRequest;
import com.springboot.userservice.dto.response.BaseResponse;
import com.springboot.userservice.dto.response.FacilityResponseDto;
import com.springboot.userservice.entity.Address;
import com.springboot.userservice.entity.Facility;
import com.springboot.userservice.entity.FacilityState;
import com.springboot.userservice.entity.Ward;
import com.springboot.userservice.services.FacilityService;
import com.springboot.userservice.services.UserService;
import com.springboot.userservice.utils.JwtTokenUtils;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(path = "/api/facilities")
@RequiredArgsConstructor
public class FacilityController {

    private final FacilityService facilityService;

    private final UserService userService;

    private final JwtTokenUtils jwtTokenUtils;

    @PostMapping("/list")
    public ResponseEntity<?> getAllFacility(
            @RequestHeader(name = "Authorization") String userToken,
            @RequestBody SearchFilterRequest searchFilterRequest) {

        userToken = userToken.substring("Bearer ".length() + JwtTokenUtils.preToken.length());
        String username = jwtTokenUtils.getUsernameFromToken(userToken);

        searchFilterRequest.setUserId(userService.getCurrentUserByName(username).getId());
        // List<FacilityResponseDto> response = facilityService
        // .getAllFacilityByUser(userService.getCurrentUserByName(username));

        List<FacilityResponseDto> filteredResponse = facilityService
                .getAllFacilityWithFilter(new Gson().toJson(searchFilterRequest));

        return ResponseEntity.ok()
                .body(new BaseResponse("1", "success", filteredResponse));

    }

    @PostMapping("/create")
    public ResponseEntity<?> addFacility(@RequestBody FacilityRequestDto facilityDto) {
        // facilityService.addFacility(payload);
        URI uri = URI
                .create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/facilities/create")
                        .toUriString());
        Facility facility = new Facility();

        facility.setName(facilityDto.getName());

        Facility lastFacility = facilityService.getLastFacility();
        facility.setFacilityCode(Facility.FACILITY_CODE_PREFIX + String.valueOf(lastFacility.getId() + 1));

        if (facilityDto.getFacilityStateId() == null) {
            BaseResponse response = new BaseResponse("0", "facilityStateId is null", null);
            return ResponseEntity.badRequest().body(response);
        }
        facility.setFacilityState(facilityService.getFacilityStateById(facilityDto.getFacilityStateId()));

        if (facilityDto.getAddress() == null) {
            BaseResponse response = new BaseResponse("0", "address is null", null);
            return ResponseEntity.badRequest().body(response);
        }
        Address address = new Address();
        address.setName(facilityDto.getAddress());
        facilityService.saveAddress(address, facilityService.getWardById(facilityDto.getWardId()));
        facility.setAddress(address);

        // set facility state.
        if (facilityDto.getFacilityStateId() == null) {
            BaseResponse response = new BaseResponse("0", "facilityStateId is null", "");
            return ResponseEntity.badRequest().body(response);
        }
        FacilityState facilityState = facilityService.getFacilityStateById(facilityDto.getFacilityStateId());
        facility.setFacilityState(facilityState);

        if (facilityDto.getBusinessTypeId() == null) {
            return ResponseEntity.badRequest().body(new BaseResponse("0", "businessTypeId is null", ""));
        }
        facility.setBusinessType(facilityService.getBusinessTypeById(facilityDto.getBusinessTypeId()));
        facilityService.saveFacility(facility);

        BaseResponse response = new BaseResponse("1", "Facility created successfully", "");
        return ResponseEntity.created(uri).body(response);
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateFacility(@RequestBody FacilityRequestDto facilityDto) {
        URI uri = URI
                .create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/facilities/update")
                        .toUriString());

        // check if facility exist.
        Facility facility = facilityService.getFacilityById(facilityDto.getId());
        if (facility == null) {
            return ResponseEntity.badRequest().body(new BaseResponse("0", "Facility not found", ""));
        }

        String name = facilityDto.getName();
        if (name != null)
            facility.setName(name);

        if (facilityDto.getFacilityStateId() != null) {
            facility.setFacilityState(facilityService.getFacilityStateById(facilityDto.getFacilityStateId()));
        }

        if (facilityDto.getAddress() != null) {
            facility.getAddress().setName(facilityDto.getAddress());
            Ward ward = facilityService.getWardById(facilityDto.getWardId());
            facility.getAddress().setWard(ward);
            if (ward == null)
                return ResponseEntity.badRequest()
                        .body(new BaseResponse("0",
                                "Can not update facility with id " + facilityDto.getId() + ". Ward not found", ""));
        }

        if (facilityDto.getBusinessTypeId() != null) {
            facility.setBusinessType(facilityService.getBusinessTypeById(facilityDto.getBusinessTypeId()));
        }

        facilityService.saveFacility(facility);

        BaseResponse response = new BaseResponse("1", "Facility updated successfully", "");

        return ResponseEntity.created(uri).body(response);
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteFacility(@RequestBody FacilityRequestDto facilityDto) {
        facilityService.deleteFacility(facilityDto.getId());
        return ResponseEntity.ok().body(new BaseResponse("1", "Facility deleted successfully", ""));
    }

}