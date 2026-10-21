import React, { useState } from "react";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { OFFICIAL_COMPANY_DATA } from "../data/companyData";

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreSolutions }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed metadata kicker with typographic separators (anti-slop rule: ZERO PILLS) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              <span>{OFFICIAL_COMPANY_DATA.nomeFantasia}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>São Paulo / Av. Paulista</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Constituída em 11/08/2016</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-emerald-400">Situação Cadastral Ativa</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Engenharia de Gestão, Processos e Expansão Empresarial.
            </h1>

            {/* Concrete value description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Estruturamos empresas para crescimento previsível. Combinamos diagnóstico de governança executiva,
              otimização de rotinas operacionais (BPO), intermediação de negócios e capacitação gerencial
              a partir do centro financeiro da América Latina.
            </p>

            {/* Direct Value Pillars list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mapeamento de Processos & BPO (BPMN)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Intermediação de Negócios & Representação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Educação Corporativa & Treinamento</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Governança, Metas OKR & Indicadores KPI</span>
              </div>
            </div>

            {/* Single-line CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 text-sm font-semibold tracking-wide text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg transition-all shadow-md hover:shadow-amber-500/10 flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Solicitar Diagnóstico Estratégico</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onExploreSolutions}
                className="px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Conhecer Soluções</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Contact quick reference */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span>Atendimento Executivo:</span>
              <a
                href={`tel:${OFFICIAL_COMPANY_DATA.contato.telefoneClean}`}
                className="text-slate-200 hover:text-amber-400 font-medium tabular-nums transition-colors"
              >
                {OFFICIAL_COMPANY_DATA.contato.telefone}
              </a>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <a
                href={`mailto:${OFFICIAL_COMPANY_DATA.contato.email}`}
                className="text-slate-200 hover:text-amber-400 transition-colors lowercase"
              >
                {OFFICIAL_COMPANY_DATA.contato.email}
              </a>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              
              {/* Fallback container */}
              <div className="aspect-[4/3] w-full relative">
                <img
                  src="/src/assets/images/hero_paulista_boardroom_1792600939444.jpg"
                  alt="Sede e sala de deliberação executiva Apollo Company na Avenida Paulista em São Paulo"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imgLoaded ? "opacity-100" : "opacity-90"
                  }`}
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                />
                
                {/* Contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Overlay Badge - Natural human text, not pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/90 text-left">
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                    Sede Operacional
                  </div>
                  <div className="text-sm font-bold text-white">
                    Edifício Barão de Cristina · Sala 1110
                  </div>
                  <div className="text-xs text-slate-400">
                    Avenida Paulista, 1471 · Bela Vista, São Paulo - SP
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Quantitative Proof Strip below the hero split */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums">
              10+ Anos
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Experiência consolidada (Constituída em 2016)
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 tracking-tight tabular-nums">
              11 CNAEs
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Atividades econômicas regulamentadas integradas
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums">
              Av. Paulista 1471
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Presença física no coração financeiro de SP
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">
              100% Regular
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Cadastro Ativo e Certidão Negativa Receita Federal
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
