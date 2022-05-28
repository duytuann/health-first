package com.springboot.userservice.repository;

import java.sql.Date;
import java.util.List;

import com.springboot.userservice.entity.Certificate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

@Repository
public interface CertificateRepository extends JpaRepository<Certificate, Long> {

    @Query(value = "SELECT * FROM certificate INNER JOIN facility ON facility.id = certificate.facility_id INNER JOIN address ON facility.address_id = address.id INNER JOIN ward w ON w.id = address.ward_id INNER JOIN user_region_management as u ON u.ward_id = w.id INNER JOIN user ON user.id = u.user_id where user.id = ?1 ORDER BY certificate.id asc", nativeQuery = true)
    List<Certificate> findAllByUserId(int id);

    @Procedure(procedureName = "getCertificateWithFilter")
    List<Certificate> findAllWithFilter(String filter);

    @Procedure(procedureName = "saveCertificate")
    int saveCertificate(Integer facilityId,
            String certificateNumber, Date publishedDate, Date expiredDate);

    Certificate findById(Integer id);

    Certificate findByCertificateNumber(String number);

    Certificate findTopByOrderByIdDesc();

    Long deleteByCertificateNumber(String name);

    Long deleteById(Integer id);
}
