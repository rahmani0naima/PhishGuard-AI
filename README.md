#  PhishGuard AI

**AI-Assisted Phishing Detection & Cybersecurity Awareness Platform**

**Cyber Security — Project 3 | Industrial Training Kit**
DecodeLabs Cybersecurity Internship, Batch 2026

---

## Overview

PhishGuard AI is a full-stack phishing detection and cybersecurity awareness platform. It analyzes submitted email content for suspicious indicators, calculates a threat score, cross-references URLs against external threat intelligence, and generates a professional security report — turning phishing analysis into a repeatable, automated workflow rather than a one-off manual review.

Phishing remains one of the most common attack vectors precisely because it exploits human trust rather than technical vulnerabilities. This project bridges that gap: it automates the detection of the social-engineering patterns that make phishing effective, and explains *why* a message is flagged, not just *that* it is.

## Objectives

- Detect phishing attempts automatically from raw email content
- Analyze sender information, domains, URLs, and language patterns
- Score and classify risk (LOW / MEDIUM / HIGH)
- Cross-reference suspicious URLs against real threat intelligence (VirusTotal)
- Generate clear, exportable security reports
- Track analysis history over time

## Key Features

### Email Phishing Analysis
Submits email content for evaluation across:
- Sender information and domain legitimacy
- Suspicious or typosquatted domains (e.g. `paypal-security-check.com` vs `paypal.com`)
- Embedded URLs
- Phishing keywords and social-engineering language (urgency, fear, authority impersonation, reward scams)

### Risk Assessment
Every analysis produces a **threat score** (0–100%) and a corresponding **risk level** (LOW / MEDIUM / HIGH RISK), giving an at-a-glance severity read before diving into details.

### VirusTotal Integration
URLs extracted from the submitted email are checked against the **VirusTotal API**, returning real threat-intelligence data:
- Malicious detections
- Suspicious detections
- Harmless results

This grounds the analysis in external, continuously updated threat data rather than static keyword matching alone.

### Email Statistics
Each analysis surfaces contextual metrics: word count, character count, and number of URLs found — useful signal for spotting anomalies (e.g. unusually short messages with a high URL density).

### PDF Security Report Export
Analysis results can be exported as a formatted PDF report, including the threat score, risk level, VirusTotal intelligence summary, detected issues, and a security recommendation — suitable for sharing with a non-technical stakeholder.

### Analysis History & Dashboard
Past analyses are logged with date, risk level, score, and malicious/suspicious counts, alongside a dashboard summarizing total analyses and risk distribution — turning the tool into something usable repeatedly rather than a single-shot script.

## Technology Stack

**Frontend**
- React.js — interactive UI (email input, results dashboard, threat visualization, statistics, PDF export)
- JavaScript — frontend logic and API communication
- Vite — development environment
- Tailwind CSS — responsive, dark cybersecurity-themed UI

**Backend**
- Spring Boot — REST API, request handling, security rule processing
- Java — backend logic
- REST API — frontend/backend communication

## Architecture

```
                 User
                  |
            React Frontend
                  |
              REST API
                  |
          Spring Boot Backend
                  |
       -------------------------
       |                       |
 AnalyzeService        VirusTotalService
       |
 Threat Detection Engine
```

### Backend Components
- **AnalyzeController** — receives analysis requests (`POST /api/analyze`)
- **AnalyzeService** — core detection logic: URL extraction, suspicious pattern matching, risk scoring, threat list generation
- **VirusTotalService** — handles VirusTotal API communication and reputation lookups

### Frontend Components
```
src
 ├── components
 │    ├── Navbar
 │    ├── EmailInput
 │    ├── AnalyzeButton
 │    ├── ClearButton
 │    ├── ThreatCard
 │    ├── EmailStats
 │    ├── ResultsSection
 │    ├── VirusTotalCard
 │    ├── HistorySection
 │    └── Footer
 └── utils
      └── pdfGenerator.js
```

## API Example

**Request**
```http
POST /api/analyze
Content-Type: application/json

{
  "email": "Suspicious email content"
}
```

**Response**
```json
{
  "score": 92,
  "level": "HIGH RISK",
  "threats": [
    "Suspicious URL",
    "Urgency detected"
  ]
}
```

## Cybersecurity Concepts Applied

- Phishing attack patterns
- Social engineering detection
- Threat intelligence integration
- URL reputation analysis
- Security automation
- API security
- Secure coding practices
- Risk assessment and scoring
- Security awareness reporting

## Getting Started

**Backend**
```bash
cd backend
./mvnw spring-boot:run
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

> Requires a VirusTotal API key configured via environment variable — do not commit it to the repository.

## Part of

**Cybersecurity Internship — Industrial Training Kit, DecodeLabs (Batch 2026)**
- Project 1: [Password Strength Checker](https://github.com/rahmani0naima/Password-Checker)
- Project 2: Cipher Suite — Classical Encryption & Decryption Toolkit

## License

MIT
