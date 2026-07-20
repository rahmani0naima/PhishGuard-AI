package com.phishguard.model;

import java.util.List;

public class AnalyzeResponse {

    private int score;
    private String level;
    private String aiSummary;

    private int urls;
    private int threatsCount;

    private List<String> threats;

    // VirusTotal
    private int malicious;
    private int suspicious;
    private int harmless;

    public AnalyzeResponse() {
    }

    public AnalyzeResponse(
        int score,
        String level,
        int urls,
        int threatsCount,
        List<String> threats,
        int malicious,
        int suspicious,
        int harmless,
        String aiSummary) {

    this.score = score;
    this.level = level;
    this.urls = urls;
    this.threatsCount = threatsCount;
    this.threats = threats;
    this.malicious = malicious;
    this.suspicious = suspicious;
    this.harmless = harmless;
    this.aiSummary = aiSummary;
}
public String getAiSummary() {
    return aiSummary;
}

public void setAiSummary(String aiSummary) {
    this.aiSummary = aiSummary;
}

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public int getUrls() {
        return urls;
    }

    public void setUrls(int urls) {
        this.urls = urls;
    }

    public int getThreatsCount() {
        return threatsCount;
    }

    public void setThreatsCount(int threatsCount) {
        this.threatsCount = threatsCount;
    }

    public List<String> getThreats() {
        return threats;
    }

    public void setThreats(List<String> threats) {
        this.threats = threats;
    }

    public int getMalicious() {
        return malicious;
    }

    public void setMalicious(int malicious) {
        this.malicious = malicious;
    }

    public int getSuspicious() {
        return suspicious;
    }

    public void setSuspicious(int suspicious) {
        this.suspicious = suspicious;
    }

    public int getHarmless() {
        return harmless;
    }

    public void setHarmless(int harmless) {
        this.harmless = harmless;
    }

}