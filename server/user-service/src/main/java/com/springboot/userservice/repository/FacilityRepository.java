package com.springboot.userservice.repository;

import java.util.List;

import com.springboot.userservice.entity.Facility;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

@Repository
public interface FacilityRepository extends JpaRepository<Facility, Long> {
    Facility findById(Integer id);

    Facility findByName(String name);

    Facility findTopByOrderByIdDesc();

    Long deleteById(Integer id);

    @Query(value = "SELECT * FROM facility f INNER JOIN address a ON f.address_id = a.id INNER JOIN ward w on w.id = a.ward_id INNER JOIN user_region_management u ON u.ward_id = w.id INNER JOIN user ON user.id = u.user_id WHERE user.id = ?1 order by f.id asc", nativeQuery = true)
    public List<Facility> getFacilitiesByUser(int id);

    @Procedure(procedureName = "getFacilityList")
    public List<Facility> getFacilityWithFilter(String filterParameter);
}