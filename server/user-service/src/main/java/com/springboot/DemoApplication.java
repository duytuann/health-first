package com.springboot;

import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
// @RequiredArgsConstructor
public class DemoApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return configureApplication(builder);
    }

    private static SpringApplicationBuilder configureApplication(SpringApplicationBuilder builder) {
        return builder.sources(applicationClass).bannerMode(Banner.Mode.OFF);
    }

    public static void main(String[] args) {
        SpringApplication.run(applicationClass, args);
    }

    private static Class<DemoApplication> applicationClass = DemoApplication.class;

    // @Bean(name = "entityManagerFactory")
    // public LocalSessionFactoryBean sessionFactory() {
    // LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();

    // return sessionFactory;
    // }

    // @Bean
    // CommandLineRunner run(FacilityService facilityService, UserService
    // userService,
    // StaticDataService staticDataService) {
    // return args -> {
    // AppUser user = userService.getCurrentUserById(1);

    // user.setPassword("tung00deptrai");

    // userService.addRoleToUser("tt-tung261", 1);
    // userService.addRoleToUser("tt-tung261", 2);
    // userService.addRoleToUser("tt-tung261", 3);

    // userService.addRegionToUser(1, "tt-tung261");

    // };
    // }

    // // // add a new user named duytuan28

    // // // List<DistrictResponseDto> list =
    // // staticDataService.getDistrictsByProvince(1);
    // // // userService.saveRole(new AppRole(null, "ROLE_SUPER_ADMIN"));
    // // // userService.saveRole(new AppRole(null, "ROLE_ADMIN"));
    // // // userService.saveRole(new AppRole(null, "ROLE_USER"));
    // // // userService.saveRole(new AppRole(null, "ROLE_MANAGER"));

    // // userService
    // // .saveUser(new AppUser(null, "david208", "tung00deptrai",
    // // "david@gmail.com", "Duy Tuan",
    // // new HashSet<>(), null, null));

    // // userService.addRoleToUser("david208", "ROLE_ADMIN");

    // // Address address = new Address();
    // // address.setName("117 Nguyen Van Giap");
    // // facilityService.saveAddress(address, facilityService.getWardById(3));

    // // // add region to user.
    // // userService.addAddressToUser(address, "david208");

    // Facility facility = new Facility();
    // facility.setFacilityCode("FAC-004");
    // facility.setAddress(facilityService.getAddressById(19));
    // facility.setName("The Coffee House");

    // //
    // facility.setFacilityState(facilityService.getFacilityStateByName("active"));
    // // facility.setBusinessType(facilityService.getBusinessTypeById(1));

    // Certificate certificate = new Certificate();
    // certificate.setCertificateNumber("CERT-005");
    // // certificate.setFacility(facility);
    // certificate.setPublishedDate(new java.sql.Date(System.currentTimeMillis()));

    // // // set expired date equal to published date + 1 year.
    // certificate.setExpiredDate(new java.sql.Date(System.currentTimeMillis() +
    // (1000 * 60 * 60 * 24 * 365)));

    // certificate.setCertificateState(facilityService.getCertificateStateByName("active"));
    // facilityService.saveCertificate(certificate);

    // // facility.getCertificates().add(certificate);
    // facilityService.saveFacility(facility);

    // };
    // }

}
