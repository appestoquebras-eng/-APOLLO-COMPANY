import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES_LIST, ServicePillar } from "../data/companyData";

interface ServicesGridProps {
  onSelectService: (service: ServicePillar) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const categories = [
    { id: "todos", label: "Todas as Soluções" },
    { id: "gestao", label: "Gestão & Processos" },
    { id: "comercial", label: "Intermediação & Vendas" },
    { id: "capacitacao", label: "Treinamento & Conteúdo" },
  ];

  const filteredServices = SERVICES_LIST.filter((service) => {
    if (activeCategory === "todos") return true;
    if (activeCategory === "gestao") {
      return service.id === "gestao-estrategica" || service.id === "processos-bpo";
    }
    if (activeCategory === "comercial") {
      return service.id === "intermediacao-representacao" || service.id === "estrategia-comercial";
    }
    if (activeCategory === "capacitacao") {
      return service.id === "educacao-corporativa" || service.id === "inteligencia-publicacoes";
    }
    return true;
  });

  return (
    <section id="solucoes" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Linhas de Atuação Regulamentadas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Soluções integradas de governança, esteiras de processo e expansão.
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Cada linha de consultoria da Apollo Company é respaldada por CNAEs oficiais e frameworks
              validados para gerar retorno mensurável e autonomia operacional.
            </p>
          </div>

          {/* Interactive filter tabs / segmented controls (allowed functional buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-amber-400 text-slate-950 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-slate-900/90 border border-slate-800 p-7 flex flex-col justify-between transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 ${
                  isFeatured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20" : ""
                }`}
              >
                <div>
                  {/* Human Editorial Numbering & CNAE reference */}
                  <div className="flex items-center justify-between gap-4 mb-4 text-xs">
                    <span className="font-mono text-amber-400 font-bold tracking-wider">
                      {service.number}.
                    </span>
                    <span className="text-slate-400 font-mono tracking-tight text-right">
                      {service.cnae}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-amber-200/80 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables list */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Entregáveis Principais:
                    </div>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with quantitative impact and CTA */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    <span className="text-amber-400 font-semibold">{service.metrics}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Consultar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
