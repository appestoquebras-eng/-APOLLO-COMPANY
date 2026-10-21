import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { OFFICIAL_COMPANY_DATA } from "../data/companyData";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-sm transform rotate-45 transition-transform group-hover:scale-125" />
            <span className="font-extrabold tracking-wider">{OFFICIAL_COMPANY_DATA.nomeFantasia}</span>
          </a>

          {/* Zone 2: 4-5 concise nav links, single-line text with subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollTo("solucoes")}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollTo("maturidade")}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Diagnóstico de Gestão
            </button>
            <button
              onClick={() => scrollTo("calculadora")}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Calculadora ROI
            </button>
            <button
              onClick={() => scrollTo("casos")}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Resultados
            </button>
            <button
              onClick={() => scrollTo("transparencia")}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Dados Cadastrais
            </button>
            <button
              onClick={() => scrollTo("localizacao")}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Av. Paulista
            </button>
          </nav>

          {/* Zone 3: 1 primary action button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs font-semibold tracking-wide text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-all rounded-lg whitespace-nowrap shrink-0 cursor-pointer shadow-sm hover:shadow-amber-500/10 flex items-center gap-1.5"
            >
              <span>Agendar Diagnóstico</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm text-slate-200">
            <button
              onClick={() => scrollTo("solucoes")}
              className="text-left py-2 px-3 rounded hover:bg-slate-800 transition-colors"
            >
              Soluções Especializadas
            </button>
            <button
              onClick={() => scrollTo("maturidade")}
              className="text-left py-2 px-3 rounded hover:bg-slate-800 transition-colors"
            >
              Simulador de Maturidade de Gestão
            </button>
            <button
              onClick={() => scrollTo("calculadora")}
              className="text-left py-2 px-3 rounded hover:bg-slate-800 transition-colors"
            >
              Calculadora de Eficiência & ROI
            </button>
            <button
              onClick={() => scrollTo("casos")}
              className="text-left py-2 px-3 rounded hover:bg-slate-800 transition-colors"
            >
              Casos de Transformação
            </button>
            <button
              onClick={() => scrollTo("transparencia")}
              className="text-left py-2 px-3 rounded hover:bg-slate-800 transition-colors"
            >
              Ficha e Dados Cadastrais (CNPJ)
            </button>
            <button
              onClick={() => scrollTo("localizacao")}
              className="text-left py-2 px-3 rounded hover:bg-slate-800 transition-colors"
            >
              Sede Avenida Paulista
            </button>
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-center text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                Solicitar Diagnóstico Estratégico
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
