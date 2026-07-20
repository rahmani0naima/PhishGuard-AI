package com.phishguard;

import com.phishguard.service.api.VirusTotalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class PhishguardBackendApplication {

    @Autowired
    private VirusTotalService virusTotalService;

    public static void main(String[] args) {
        SpringApplication.run(PhishguardBackendApplication.class, args);
    }

  
@PostConstruct
public void init() throws InterruptedException {

   
}
}