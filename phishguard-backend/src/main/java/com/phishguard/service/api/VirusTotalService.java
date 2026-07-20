package com.phishguard.service.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class VirusTotalService {

    @Value("${virustotal.api.key}")
    private String apiKey;

    private final RestClient restClient = RestClient.create();

    private final ObjectMapper mapper = new ObjectMapper();

    public String submitUrl(String url) {

        return restClient.post()
                .uri("https://www.virustotal.com/api/v3/urls")
                .header("x-apikey", apiKey)
                .header("Content-Type", "application/x-www-form-urlencoded")
                .body("url=" + url)
                .retrieve()
                .body(String.class);
    }

    public String getAnalysis(String id) {

        return restClient.get()
                .uri("https://www.virustotal.com/api/v3/analyses/" + id)
                .header("x-apikey", apiKey)
                .retrieve()
                .body(String.class);
    }

    public String extractAnalysisId(String json) {

        try {

            JsonNode root = mapper.readTree(json);

            return root.path("data").path("id").asText();

        } catch (Exception e) {

            return null;

        }
    }
    public int[] extractStats(String json) {

    try {

        JsonNode root = mapper.readTree(json);

        JsonNode stats = root.path("data")
                             .path("attributes")
                             .path("stats");

        int malicious = stats.path("malicious").asInt();
        int suspicious = stats.path("suspicious").asInt();
        int harmless = stats.path("harmless").asInt();

        return new int[] {
                malicious,
                suspicious,
                harmless
        };

    } catch (Exception e) {

        return new int[] {0,0,0};

    }

}

}