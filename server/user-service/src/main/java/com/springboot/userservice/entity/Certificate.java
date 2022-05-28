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
@Table(name = "certificate", uniqueConstraints = {
        @UniqueConstraint(name = "uni_certificate_code", columnNames = "certificate_number")
})
public class Certificate {

    public static final String CERTIFICATE_PREFIX = "CERT-0";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NonNull
    @Column(name = "certificate_number")
    private String certificateNumber;

    private String description;

    @NonNull
    @Column(name = "published_date")
    private Date publishedDate;

    // @NonNull
    @Column(name = "expired_date")
    private Date expiredDate;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "facility_id", nullable = false)
    private Facility facility;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "state_id")
    private CertificateState certificateState;

}