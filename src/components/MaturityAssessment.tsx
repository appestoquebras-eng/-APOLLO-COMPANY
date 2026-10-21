import React, { useState } from "react";
import { CheckCircle2, ChevronRight, RotateCcw, Send, Sparkles } from "lucide-react";
import { DIAGNOSTIC_PILLARS, DiagnosticPillar } from "../data/diagnosticData";

interface MaturityAssessmentProps {
  onConsultWithDiagnostic: (score: number, level: string, answers: Record<string, number>) => void;
}

export const MaturityAssessment: React.FC<MaturityAssessmentProps> = ({ onConsultWithDiagnostic }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({
    processos: 2,
    governanca: 2,
    indicadores: 2,
    comercial: 2,
  });
  const [completed, setCompleted] = useState<boolean>(false);

  const currentPillar: DiagnosticPillar = DIAGNOSTIC_PILLARS[activeStep];

  const handleSelectOption = (pillarId: string, score: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [pillarId]: score,
    }));
  };

  const handleNext = () => {
    if (activeStep < DIAGNOSTIC_PILLARS.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({
      processos: 2,
      governanca: 2,
      indicadores: 2,
      comercial: 2,
    });
    setActiveStep(0);
    setCompleted(false);
  };

  // Calculate score (1 to 4 in each of 4 pillars -> min 4, max 16)
  const totalScore = Object.values(selectedAnswers).reduce((a, b) => a + b, 0);
  const percentage = Math.round(((totalScore - 4) / 12) * 100);

  let maturityLevel = "Em Estruturação";
  let maturityDescription = "A empresa possui tração comercial, mas enfrenta gargalos operacionais e dependência de pessoas-chave para tarefas corriqueiras.";
  let recommendedFocus = "Mapeamento prioritário de fluxos de trabalho (BPMN), implantação de POPs e rotinas de BPO administrativo para liberar a liderança.";

  if (percentage <= 30) {
    maturityLevel = "Estágio Inicial / Sobrecarga Operacional";
    maturityDescription = "Operação vulnerável e altamente centralizada. Decisões tomadas no calor do momento e processos sem registro formal.";
    recommendedFocus = "Auditoria emergencial de processos, organização do backoffice e criação dos primeiros manuais operacionais.";
  } else if (percentage <= 65) {
    maturityLevel = "Maturidade Intermediária / Crescimento em Expansão";
    maturityDescription = "Empresa estruturada com rotinas estabelecidas, mas com inconsistências em indicadores financeiros e desalinhamento entre setores.";
    recommendedFocus = "Implantação de comitê executivo de metas (OKR), painel de KPIs em tempo real e treinamento de média liderança.";
  } else if (percentage <= 85) {
    maturityLevel = "Maturidade Avançada / Governança Estruturada";
    maturityDescription = "Processos sólidos e liderança autônoma. Pronta para alianças comerciais mais robustas e intermediação de grandes contas.";
    recommendedFocus = "Refinamento de canais de representação comercial especializada e automação contínua de rotinas.";
  } else {
    maturityLevel = "Excelência em Gestão & Alta Eficiência";
    maturityDescription = "Operação de alto desempenho com métricas precisas, cultura de processos sedimentada e governança plena.";
    recommendedFocus = "Novas frentes de intermediação de negócios, parcerias B2B estratégicas e escala de portfólio.";
  }

  return (
    <section id="maturidade" className="py-20 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Diagnóstico Interativo Gratuito
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Descubra o Nível de Maturidade de Gestão da sua Empresa
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Responda 4 perguntas sobre seus processos, governança, números e vendas. 
            O algoritmo da Apollo Company gera uma análise instantânea e o roadmap de prioridades.
          </p>
        </div>

        {/* Diagnostic Tool Card */}
        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Progress Header */}
          <div className="border-b border-slate-800/80 px-6 py-4 bg-slate-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {completed ? "Diagnóstico Concluído" : `Pilar ${activeStep + 1} de ${DIAGNOSTIC_PILLARS.length}`}
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-xs text-slate-400">
                {completed ? "Resultado Consolidado" : currentPillar.title}
              </span>
            </div>

            {/* Stepper Dots (functional indicator) */}
            <div className="flex items-center gap-1.5">
              {DIAGNOSTIC_PILLARS.map((pillar, idx) => (
                <button
                  key={pillar.id}
                  onClick={() => {
                    setActiveStep(idx);
                    setCompleted(false);
                  }}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeStep === idx && !completed
                      ? "w-6 bg-amber-400"
                      : selectedAnswers[pillar.id]
                      ? "w-2 bg-slate-600 hover:bg-slate-400"
                      : "w-2 bg-slate-800"
                  }`}
                  aria-label={`Ir para pilar ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-10">
            {!completed ? (
              <div className="space-y-8">
                
                {/* Question Info */}
                <div className="space-y-2">
                  <div className="text-xs text-amber-400/90 font-medium tracking-wide">
                    {currentPillar.subtitle}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {currentPillar.question}
                  </h3>
                </div>

                {/* Options List */}
                <div className="space-y-3">
                  {currentPillar.options.map((option, idx) => {
                    const isSelected = selectedAnswers[currentPillar.id] === option.score;

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(currentPillar.id, option.score)}
                        className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                          isSelected
                            ? "bg-amber-400/10 border-amber-500/80 text-white"
                            : "bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-900 hover:border-slate-700"
                        }`}
                      >
                        <div
                          className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center border shrink-0 ${
                            isSelected
                              ? "border-amber-400 bg-amber-400 text-slate-950"
                              : "border-slate-700 bg-slate-800"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-relaxed">{option.text}</p>
                          {isSelected && (
                            <p className="text-xs text-amber-300/80 pt-1 leading-normal">
                              {option.feedback}
                            </p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="pt-4 flex items-center justify-between gap-4 border-t border-slate-800">
                  <button
                    onClick={handlePrev}
                    disabled={activeStep === 0}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeStep === 0
                        ? "opacity-30 cursor-not-allowed text-slate-500"
                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    Anterior
                  </button>

                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 text-xs font-bold tracking-wide text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>{activeStep === DIAGNOSTIC_PILLARS.length - 1 ? "Ver Resultado" : "Próximo"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ) : (
              /* Completed Result State */
              <div className="space-y-8 animate-fade-in">
                
                {/* Result Headline & Score */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-xl bg-slate-900 border border-slate-800">
                  
                  <div className="md:col-span-5 text-center md:text-left space-y-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Índice de Maturidade Operacional
                    </span>
                    <div className="text-5xl font-black text-amber-400 font-mono tracking-tight tabular-nums">
                      {percentage}%
                    </div>
                    <div className="text-xs font-medium text-slate-400">
                      Pontuação: {totalScore} de 16 pontos possíveis
                    </div>
                  </div>

                  <div className="md:col-span-7 space-y-2 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Diagnóstico Sintético
                    </div>
                    <h4 className="text-xl font-bold text-white">{maturityLevel}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {maturityDescription}
                    </p>
                  </div>

                </div>

                {/* Recommended Apollo Plan */}
                <div className="p-6 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Recomendação Estratégica Prioritária</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">
                    {recommendedFocus}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Nossa equipe na Avenida Paulista realiza a imersão de 30 dias para estruturação dos procedimentos operacionais e desenho do plano diretor executivo.
                  </p>
                </div>

                {/* Score breakdown across 4 pillars */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  {DIAGNOSTIC_PILLARS.map((p) => {
                    const score = selectedAnswers[p.id];
                    const pillarPerc = (score / 4) * 100;
                    return (
                      <div key={p.id} className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                        <div className="text-xs text-slate-400 font-medium truncate mb-1">
                          {p.title}
                        </div>
                        <div className="text-lg font-bold text-white font-mono tabular-nums">
                          {pillarPerc}%
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Refazer Diagnóstico</span>
                  </button>

                  <button
                    onClick={() => onConsultWithDiagnostic(percentage, maturityLevel, selectedAnswers)}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-bold tracking-wide text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Discutir Diagnóstico com Nossos Consultores</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
