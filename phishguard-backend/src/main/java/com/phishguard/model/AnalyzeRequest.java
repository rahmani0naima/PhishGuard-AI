package com.phishguard.model;

public class AnalyzeRequest {

    private String email;

    public AnalyzeRequest() {
    }

    public AnalyzeRequest(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}