import { jsPDF } from "jspdf";

export function exportAnalysisPDF(analysis) {

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("PHISHGUARD AI REPORT", 20, 20);

    doc.setFontSize(14);

    doc.text(`Threat Score: ${analysis.score}%`, 20, 40);
    doc.text(`Risk Level: ${analysis.level}`, 20, 50);

    doc.text("VirusTotal", 20, 70);
    doc.text(`Malicious: ${analysis.malicious}`, 30, 80);
    doc.text(`Suspicious: ${analysis.suspicious}`, 30, 90);
    doc.text(`Harmless: ${analysis.harmless}`, 30, 100);

    doc.text("Detected Issues:", 20, 120);

    let y = 130;

    analysis.threats.forEach(threat => {
        doc.text("- " + threat, 30, y);
        y += 10;
    });

    doc.text("Recommendation:", 20, y + 10);

    doc.text(
        "Do not click suspicious links or download attachments.",
        20,
        y + 20
    );

    doc.save("PhishGuard_Report.pdf");

}
