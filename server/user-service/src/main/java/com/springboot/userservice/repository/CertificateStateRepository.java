package com.springboot.userservice.repository;

import com.springboot.userservice.entity.CertificateState;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CertificateStateRepository extends JpaRepository<CertificateState, Long> {
    CertificateState findById(Integer id);

    CertificateState findByName(String name);
}