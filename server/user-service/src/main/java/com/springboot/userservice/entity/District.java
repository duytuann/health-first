package com.springboot.userservice.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
@Table(name = "district", uniqueConstraints = {
        @UniqueConstraint(name = "uni_districtName", columnNames = "name")
})
public class District {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NonNull
    private String name;

    @OneToMany(mappedBy = "district")
    private Set<Ward> wards = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "province_id", nullable = false)
    private Province province;

    // @NonNull
    // @Column(name = "province_id")
    // private Integer provinceId;
}
