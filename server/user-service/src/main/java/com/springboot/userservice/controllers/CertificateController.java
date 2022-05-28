package com.springboot.userservice.controllers;

import java.net.URI;
import java.sql.Date;

import com.springboot.userservice.dto.request.CertificateRequestDto;
import com.springboot.userservice.dto.request.SearchFilterRequest;
import com.springboot.userservice.dto.response.BaseResponse;
import com.springboot.userservice.entity.Certificate;
import com.springboot.userservice.entity.Facility;
import com.springboot.userservice.services.CertificateService;
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
@RequestMapping(path = "/api/certificates")
@RequiredArgsConstructor
public class CertificateController {

	private final CertificateService certificateService;

	private final FacilityService facilityService;

	private final JwtTokenUtils jwtTokenUtils;

	private final UserService userService;

	@PostMapping("/list")
	public ResponseEntity<BaseResponse> getAllCertificate(
			@RequestHeader(name = "Authorization") String userToken,
			@RequestBody SearchFilterRequest filter) {

		userToken = userToken.substring("Bearer ".length() + JwtTokenUtils.preToken.length());
		String username = jwtTokenUtils.getUsernameFromToken(userToken);
		filter.setUserId(userService.getCurrentUserByName(username).getId());

		BaseResponse response = new BaseResponse("1", "success",
				certificateService.getAllCertificateWithFilter(filter));
		return ResponseEntity.ok()
				.body(response);
	}

	@PostMapping("/create")
	public ResponseEntity<?> addCertificateToFacility(
			@RequestBody CertificateRequestDto certificateDto) {
		// facilityService.addFacility(payload);
		URI uri = URI
				.create(ServletUriComponentsBuilder.fromCurrentContextPath()
						.path("/api/certificates/create")
						.toUriString());

		Certificate certificate = new Certificate();

		if (certificateDto.getDescription() != null)
			certificate.setDescription(certificateDto.getDescription());

		// set certificate number
		Certificate lastCertificate = certificateService.getLastCertificate();
		// increase next certificate number by 1.
		certificate.setCertificateNumber(
				Certificate.CERTIFICATE_PREFIX + String.valueOf(lastCertificate.getId() + 1));

		// // // convert string to SQL date.
		Date publishedDate = new Date(System.currentTimeMillis());
		certificate.setPublishedDate(publishedDate);

		if (certificateDto.getExpiredDate() != null) {
			Date expiredDate = Date.valueOf(certificateDto.getExpiredDate());
			certificate.setExpiredDate(expiredDate);
		}

		Facility facility = facilityService.getFacilityById(certificateDto.getFacilityId());

		certificate.setFacility(facility);

		// set certificate state.
		certificate.setCertificateState(certificateService.getCertificateStateById(
				certificateDto.getCertificateStateId()));

		Certificate result = certificateService.saveCertificate(certificate);
		BaseResponse response = new BaseResponse(result == null ? "0" : "1",
				result != null ? "Add certificate success" : "Add certificate failed", "");
		return ResponseEntity.created(uri).body(response);
	}

	@PostMapping("/update")
	public ResponseEntity<?> updateCertificateToFacility(
			@RequestBody CertificateRequestDto certificateDto) {
		// facilityService.addFacility(payload);
		URI uri = URI
				.create(ServletUriComponentsBuilder.fromCurrentContextPath()
						.path("/api/certificates/update")
						.toUriString());

		Certificate certificate = certificateService.getCertificateById(certificateDto.getId());

		if (certificate == null) {
			BaseResponse response = new BaseResponse("0",
					"Certificate with id " + certificateDto.getId() + " not found!", "");
			return ResponseEntity.created(uri).body(response);
		}

		certificate.setPublishedDate(new Date(System.currentTimeMillis()));
		if (certificateDto.getExpiredDate() != null) {
			Date expiredDate = Date.valueOf(certificateDto.getExpiredDate());
			certificate.setExpiredDate(expiredDate);
		}

		// set certificate state.
		if (certificateDto.getCertificateStateId() != null)
			certificate.setCertificateState(
					certificateService.getCertificateStateById(certificateDto.getCertificateStateId()));

		Certificate result = certificateService.saveCertificate(certificate);
		BaseResponse response = new BaseResponse(result == null ? "0" : "1",
				result != null ? "Update certificate success" : "Update certificate failed",
				"");
		return ResponseEntity.created(uri).body(response);
	}

	@PostMapping("/delete")
	public ResponseEntity<?> deleteCertificate(@RequestBody CertificateRequestDto certificateDto) {
		// facilityService.addFacility(payload);
		URI uri = URI
				.create(ServletUriComponentsBuilder.fromCurrentContextPath()
						.path("/api/certificates/delete")
						.toUriString());

		Certificate certificate = certificateService.getCertificateById(certificateDto.getId());

		if (certificate == null) {
			BaseResponse response = new BaseResponse("0",
					"Certificate with id " + certificateDto.getId() + " not found!", "");
			return ResponseEntity.created(uri).body(response);
		}

		certificateService.deleteCertificateById(certificate.getId());
		return ResponseEntity.created(uri).body(new BaseResponse("1", "Delete certificate success", ""));
	}
}