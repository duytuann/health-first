package com.springboot.userservice.utils;

import org.springframework.stereotype.Component;

@Component
public class PropertiesUtils {

    private static final String PROPERTIES_FILE = "application.properties";

    public static String getProperty(String key) {
        return PropertiesUtils.class.getClassLoader().getResource(PROPERTIES_FILE).getPath() + "\\" + key;
    }
}
