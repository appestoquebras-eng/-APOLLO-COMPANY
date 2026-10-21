import React, { useState } from "react";
import { CASE_STUDIES } from "../data/companyData";

export const CaseStudies: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="casos" className="py-20 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Evidência de Impacto
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Transformações estruturadas e resultados quantificados.
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Projetos reais conduzidos com rigor metodológico, métricas transparentes e retorno sobre o investimento.
            </p>
          </div>
          
          <div className="text-xs text-slate-400 max-w-xs">
            Metodologias aplicadas em conformidade com as melhores práticas de BPMN e Governança Corporativa.
          </div>
        </div>

        {/* Featured Visual + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
            <div className="aspect-[4/3] w-full relative">
              <img
                src="/src/assets/images/consulting_strategy_meeting_1792600940584.jpg"
                alt="Sessão executiva de alinhamento estratégico e revisão de KPIs conduzida pela Apollo Company"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imgLoaded ? "opacity-100" : "opacity-90"
                }`}
                referrerPolicy="no-referrer"
                onLoad={() => setImgLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/90 backdrop-blur-sm rounded-lg border border-slate-800 text-xs text-slate-300">
                <span className="text-amber-400 font-semibold">Comitê de Gestão:</span> Imersão estratégica com métricas de desempenho e plano de metas.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Diferenciais da Nossa Abordagem
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-1">
                  1. Diagnóstico Imersivo Sem Fórmulas Prontas
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Não aplicamos templates genéricos. Analisamos a realidade do seu fluxo financeiro, equipe e rotinas para criar a solução exata que a sua operação suporta e necessita.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-1">
                  2. Acompanhamento Lado a Lado na Execução
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Não entregamos apenas relatórios em PDF. Participamos da implantação dos processos, do treinamento da equipe e da validação das métricas semanais.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-1">
                  3. Ecossistema Multidisciplinar (CNAEs Integrados)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Apoiamos sua empresa desde a documentação e treinamento gerencial até a representação comercial e intermediação de parcerias industriais estratégicas.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                {/* Sector text metadata (clean text, no pills) */}
                <div className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider">
                  {item.clientSector}
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 font-semibold">Desafio Inicial: </span>
                    <span className="text-slate-300">{item.challenge}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">Ação Apollo: </span>
                    <span className="text-slate-300">{item.action}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">Resultado Obtido: </span>
                    <span className="text-slate-300">{item.result}</span>
                  </div>
                </div>
              </div>

              {/* Quantified Metric Badge */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-black text-amber-400 font-mono tabular-nums">
                    {item.highlightMetric}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.metricLabel}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
