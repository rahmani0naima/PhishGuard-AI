package com.phishguard.repository;

import com.phishguard.model.AnalysisHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnalysisHistoryRepository
        extends JpaRepository<AnalysisHistory, Long> {
}
