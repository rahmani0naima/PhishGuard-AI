package com.phishguard.controller;

import com.phishguard.model.AnalysisHistory;
import com.phishguard.model.AnalyzeRequest;
import com.phishguard.model.AnalyzeResponse;
import com.phishguard.repository.AnalysisHistoryRepository;
import com.phishguard.service.AnalyzeService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class AnalyzeController {

    private final AnalyzeService analyzeService;
    private final AnalysisHistoryRepository historyRepository;

    public AnalyzeController(
            AnalyzeService analyzeService,
            AnalysisHistoryRepository historyRepository) {

        this.analyzeService = analyzeService;
        this.historyRepository = historyRepository;
    }

    @PostMapping("/analyze")
    public AnalyzeResponse analyze(@RequestBody AnalyzeRequest request) {
        return analyzeService.analyze(request.getEmail());
    }

    @GetMapping("/history")
    public List<AnalysisHistory> history() {
        return historyRepository.findAll();
    }
}