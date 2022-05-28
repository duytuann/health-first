package com.springboot.userservice.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import com.google.gson.Gson;
import com.springboot.userservice.dto.request.SearchFilterRequest;
import com.springboot.userservice.dto.response.CertificateResponseDto;
import com.springboot.userservice.entity.Certificate;
import com.springboot.userservice.entity.CertificateState;
import com.springboot.userservice.repository.CertificateRepository;
import com.springboot.userservice.repository.CertificateStateRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Transactional
@Service
@RequiredArgsConstructor
public class CertificateServiceImpl implements CertificateService {

    private final CertificateRepository certificateRepository;

    private final CertificateStateRepository certificateStateRepository;

    @Override
    public List<CertificateResponseDto> getAllCertificateByUser(Integer id) {
        List<Certificate> certificates = certificateRepository.findAllByUserId(id);
        return certificates.stream()
                .map(CertificateResponseDto::new)
                .collect(Collectors.toList());
    }

    @Override
    public Certificate saveCertificate(Certificate certificate) {
        return certificateRepository.save(certificate);
    }

    @Override
    public Certificate getCertificateById(Integer id) {
        return certificateRepository.findById(id);
    }

    @Override
    public CertificateState getCertificateStateById(Integer id) {
        return certificateStateRepository.findById(id);
    }

    @Override
    public Long deleteCertificateById(Integer id) {
        return certificateRepository.deleteById(id);
    }

    @Override
    public Certificate getLastCertificate() {
        return certificateRepository.findTopByOrderByIdDesc();
    }

    @Override
    public List<CertificateResponseDto> getAllCertificateWithFilter(SearchFilterRequest filter) {

        List<Certificate> certificates = certificateRepository.findAllWithFilter(new Gson().toJson(filter));

        return certificates.stream()
                .map(CertificateResponseDto::new)
                .collect(Collectors.toList());
    }

}