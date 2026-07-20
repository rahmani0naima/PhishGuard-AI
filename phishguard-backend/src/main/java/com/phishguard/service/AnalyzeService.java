package com.phishguard.service;

import com.phishguard.model.AnalyzeResponse;
import com.phishguard.service.api.GeminiService;
import com.phishguard.service.api.VirusTotalService;
import org.springframework.stereotype.Service;
import com.phishguard.model.AnalysisHistory;
import com.phishguard.repository.AnalysisHistoryRepository;
import java.time.LocalDateTime;


import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class AnalyzeService {

    private final VirusTotalService virusTotalService;
    private final GeminiService geminiService;
    private final AnalysisHistoryRepository historyRepository;

public AnalyzeService(
        VirusTotalService virusTotalService,
        GeminiService geminiService,
        AnalysisHistoryRepository historyRepository) {

    this.virusTotalService = virusTotalService;
    this.geminiService = geminiService;
    this.historyRepository = historyRepository;
}

    public AnalyzeResponse analyze(String email) {

        int score = 0;
        int urlCount = 0;

        int malicious = 0;
        int suspicious = 0;
        int harmless = 0;

        String firstUrl = null;

        List<String> threats = new ArrayList<>();

        email = email.toLowerCase();

        // =====================================================
        // 1. Sender Analysis
        // =====================================================

        Pattern senderPattern =
                Pattern.compile("from:.*<(.*?)>", Pattern.CASE_INSENSITIVE);

        Matcher senderMatcher = senderPattern.matcher(email);

        if (senderMatcher.find()) {

            String sender = senderMatcher.group(1);

            if (sender.contains("paypa1")
                    || sender.contains("micr0soft")
                    || sender.contains("amaz0n")) {

                score += 25;
                threats.add("Suspicious sender domain");
            }
        }

        // =====================================================
        // 2. URL Analysis
        // =====================================================

        Pattern urlPattern = Pattern.compile("https?://\\S+");

        Matcher urlMatcher = urlPattern.matcher(email);

        while (urlMatcher.find()) {

            urlCount++;

            String url = urlMatcher.group();

            if (firstUrl == null) {
                firstUrl = url;
            }

            // HTTP instead of HTTPS

            if (url.startsWith("http://")) {

                score += 30;
                threats.add("HTTP link detected");
            }

            // URL Shorteners

            if (url.contains("bit.ly")
                    || url.contains("tinyurl")
                    || url.contains("t.co")
                    || url.contains("goo.gl")
                    || url.contains("rb.gy")) {

                score += 20;
                threats.add("Shortened URL");
            }
        }

        if (urlCount >= 3) {

            score += 15;
            threats.add("Multiple URLs detected");
        }

        // =====================================================
        // 3. Urgency Keywords
        // =====================================================

        String[] urgentWords = {
                "urgent",
                "immediately",
                "verify",
                "password",
                "login",
                "account",
                "click here",
                "confirm",
                "security alert",
                "suspended"
        };

        for (String word : urgentWords) {

            if (email.contains(word)) {

                score += 10;
                threats.add("Keyword: " + word);
            }
        }

        // =====================================================
        // 4. Sensitive Information
        // =====================================================

        String[] sensitiveWords = {
                "credit card",
                "bank account",
                "cvv",
                "pin",
                "otp",
                "social security"
        };

        for (String word : sensitiveWords) {

            if (email.contains(word)) {

                score += 15;
                threats.add("Sensitive information request: " + word);
            }
        }

        // =====================================================
        // 5. VirusTotal Scan
        // =====================================================

        if (firstUrl != null) {

            try {

                String submitResponse = virusTotalService.submitUrl(firstUrl);

String analysisId = virusTotalService.extractAnalysisId(submitResponse);

System.out.println("========== VirusTotal ==========");
String result = virusTotalService.getAnalysis(analysisId);

int[] stats = virusTotalService.extractStats(result);

malicious = stats[0];
suspicious = stats[1];
harmless = stats[2];

System.out.println("Malicious : " + malicious);
System.out.println("Suspicious: " + suspicious);
System.out.println("Harmless  : " + harmless);
if (malicious > 0) {

    score += 40;
    threats.add("VirusTotal detected malicious URL");

}

if (suspicious > 0) {

    score += 20;
    threats.add("VirusTotal detected suspicious URL");

}
System.out.println("================================");
                

                // We will parse this response in the next step
                // and call getAnalysis()

            } catch (Exception e) {

                System.out.println("VirusTotal Error: " + e.getMessage());

            }

        }

        // =====================================================
        // 6. Cap Score
        // =====================================================

        if (score > 100) {
            score = 100;
        }

        // =====================================================
        // 7. Risk Level
        // =====================================================

        String level;

        if (score >= 70) {

            level = "HIGH RISK";

        } else if (score >= 40) {

            level = "MEDIUM RISK";

        } else {

            level = "LOW RISK";

        }
        String aiSummary = geminiService.analyzeEmail(email);
        System.out.println("========== GEMINI ==========");
System.out.println(aiSummary);
System.out.println("============================");
AnalysisHistory history = new AnalysisHistory();

history.setEmail(email);
history.setScore(score);
history.setLevel(level);
history.setMalicious(malicious);
history.setSuspicious(suspicious);
history.setHarmless(harmless);
history.setCreatedAt(LocalDateTime.now());

historyRepository.save(history);
        // =====================================================
        // Return Result
        // =====================================================

       return new AnalyzeResponse(
    score,
    level,
    urlCount,
    threats.size(),
    threats,
    malicious,
    suspicious,
    harmless,
    aiSummary
);

    }

}