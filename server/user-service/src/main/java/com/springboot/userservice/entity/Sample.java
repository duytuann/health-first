package com.springboot.userservice.entity;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "sample", uniqueConstraints = {
        @UniqueConstraint(name = "uni_sample_code", columnNames = "sample_code") })
public class Sample {

    public static final String SAMPLE_PREFIX = "SPC-0A";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NonNull
    @Column(name = "sample_code")
    private String sampleCode;

    @NonNull
    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "resulted_date")
    private Date resultedDate;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "state_id", nullable = false)
    private SampleState sampleState;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "result_id", nullable = false)
    private SampleResult sampleResult;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "activity_id", nullable = false)
    private Activity activity;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "inspection_unit_id", nullable = false)
    private InspectionUnit inspectionUnit;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "food_id", nullable = false)
    private Food food;

}