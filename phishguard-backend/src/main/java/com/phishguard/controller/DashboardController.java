package com.phishguard.controller;

import com.phishguard.repository.AnalysisHistoryRepository;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    private final AnalysisHistoryRepository repository;

    public DashboardController(AnalysisHistoryRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public Map<String, Long> getStats() {

        Map<String, Long> stats = new HashMap<>();

        long total = repository.count();

        long high = repository.findAll()
                .stream()
                .filter(a -> "HIGH RISK".equals(a.getLevel()))
                .count();

        long medium = repository.findAll()
                .stream()
                .filter(a -> "MEDIUM RISK".equals(a.getLevel()))
                .count();

        long low = repository.findAll()
                .stream()
                .filter(a -> "LOW RISK".equals(a.getLevel()))
                .count();

        stats.put("total", total);
        stats.put("high", high);
        stats.put("medium", medium);
        stats.put("low", low);

        return stats;
    }
}