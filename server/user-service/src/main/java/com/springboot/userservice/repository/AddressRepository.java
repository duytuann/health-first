package com.springboot.userservice.repository;

import com.springboot.userservice.entity.Address;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
    Address findById(Integer Id);
}
