package com.springboot.userservice.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
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
@Table(name = "facility", uniqueConstraints = {
        @UniqueConstraint(name = "uni_facility_name", columnNames = "name")
})
public class Facility {

    public static final String FACILITY_CODE_PREFIX = "FAC-0T";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NonNull
    @Column(name = "facility_code")
    private String facilityCode;

    @NonNull
    private String name;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "address_id")
    private Address address;

    @OneToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "state_id")
    private FacilityState facilityState;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "business_type_id")
    private BusinessType businessType;

    @OneToMany(mappedBy = "facility", fetch = FetchType.EAGER, cascade = CascadeType.MERGE, orphanRemoval = true)
    private Set<Certificate> certificates = new HashSet<>();

    @OneToMany(mappedBy = "facility", fetch = FetchType.EAGER, cascade = CascadeType.MERGE, orphanRemoval = true)
    private Set<Activity> activities = new HashSet<>();

}