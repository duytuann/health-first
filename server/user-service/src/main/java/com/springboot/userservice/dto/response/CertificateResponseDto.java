package com.springboot.userservice.dto.response;

import com.springboot.userservice.entity.Certificate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CertificateResponseDto {

    private Integer id;

    private String certificateNumber;

    private String publishedDate;

    private String expiredDate;

    private Integer certificateStateId;

    private String facilityName;

    private Integer facilityId;

    public CertificateResponseDto(Certificate certificate) {
        this.id = certificate.getId();
        this.certificateNumber = certificate.getCertificateNumber();
        this.publishedDate = certificate.getPublishedDate().toString();
        this.expiredDate = certificate.getExpiredDate().toString();
        this.certificateStateId = certificate.getCertificateState().getId();
        this.facilityName = certificate.getFacility().getName();
        this.facilityId = certificate.getFacility().getId();
    }

}