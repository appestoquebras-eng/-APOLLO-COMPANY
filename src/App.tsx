import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServicesGrid } from "./components/ServicesGrid";
import { MaturityAssessment } from "./components/MaturityAssessment";
import { RoiCalculator } from "./components/RoiCalculator";
import { CaseStudies } from "./components/CaseStudies";
import { CorporateRegistry } from "./components/CorporateRegistry";
import { PaulistaLocation } from "./components/PaulistaLocation";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ConsultationModal } from "./components/ConsultationModal";
import { ServicePillar } from "./data/companyData";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServicePillar | null>(null);
  const [diagnosticResult, setDiagnosticResult] = useState<{
    score: number;
    level: string;
  } | null>(null);

  const handleOpenConsultation = () => {
    setSelectedService(null);
    setDiagnosticResult(null);
    setModalOpen(true);
  };

  const handleSelectService = (service: ServicePillar) => {
    setSelectedService(service);
    setDiagnosticResult(null);
    setModalOpen(true);
  };

  const handleConsultWithDiagnostic = (score: number, level: string) => {
    setDiagnosticResult({ score, level });
    setSelectedService(null);
    setModalOpen(true);
  };

  const handleExploreSolutions = () => {
    const el = document.getElementById("solucoes");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500/20 selection:text-amber-300">
      {/* 3-zone Top Bar Contract */}
      <Header onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExploreSolutions={handleExploreSolutions}
        />

        {/* Core Services Grid */}
        <ServicesGrid onSelectService={handleSelectService} />

        {/* Interactive Maturity Assessment Tool */}
        <MaturityAssessment onConsultWithDiagnostic={handleConsultWithDiagnostic} />

        {/* Interactive ROI & Process Optimization Calculator */}
        <RoiCalculator onScheduleCall={handleOpenConsultation} />

        {/* Proof of Impact & Case Studies */}
        <CaseStudies />

        {/* Official Corporate Registration (Dados Cadastrais Oficiais) */}
        <CorporateRegistry />

        {/* Avenida Paulista Location Showcase */}
        <PaulistaLocation />

        {/* Contact & Consultation Form */}
        <ContactSection />
      </main>

      {/* Quiet Corporate Footer */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedService={selectedService}
        diagnosticResult={diagnosticResult}
      />
    </div>
  );
}
