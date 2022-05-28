package com.springboot.userservice.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SampleRequestDto {

    private Integer id;

    private String sampleCode;

    private String createdDate;

    private String resultedDate;

    private Integer sampleStateId;

    private Integer sampleResultId;

    private Integer activityId;

    private Integer inspectionUnitId;

    private Integer foodId;

}