package com.springboot.userservice.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CertificateRequestDto {

    private Integer id;

    private Integer facilityId;

    private String certificateNumber;

    private String publishedDate;

    private String expiredDate;

    private String description;

    private Integer certificateStateId;

}