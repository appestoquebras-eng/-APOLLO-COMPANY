import React, { useState } from "react";
import { Calculator, ArrowRight, TrendingUp } from "lucide-react";

interface RoiCalculatorProps {
  onScheduleCall: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onScheduleCall }) => {
  const [employees, setEmployees] = useState<number>(12);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(8);
  const [hourlyRate, setHourlyRate] = useState<number>(65);

  // Math:
  // Total weekly lost hours = employees * hoursPerWeek
  // Monthly lost hours approx = weekly * 4.33
  // Apollo Company typically recovers ~65% of these wasted hours through standard procedures (POPs) & BPO
  const monthlyWastedHours = Math.round(employees * hoursPerWeek * 4.33);
  const hoursRecoveredPerMonth = Math.round(monthlyWastedHours * 0.65);
  const monthlyCostWaste = Math.round(monthlyWastedHours * hourlyRate);
  const annualSavingsEstimated = Math.round(hoursRecoveredPerMonth * hourlyRate * 12);
  const efficiencyGainPercent = Math.round((hoursRecoveredPerMonth / (employees * 160)) * 100);

  return (
    <section id="calculadora" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Simulação de Eficiência Operacional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Calculadora de Retorno em Otimização de Processos
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Rotinas desorganizadas, retrabalho em planilhas e conciliações manuais drenam tempo valioso.
            Estime o volume de horas e recursos que a padronização e o BPO da Apollo Company podem recuperar.
          </p>
        </div>

        {/* 2-Column Split: Sliders and Real-time Metric Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Slider 1: Employees */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-300 font-medium">
                    Colaboradores em rotinas administrativas/operacionais
                  </span>
                  <span className="font-mono font-bold text-amber-400 tabular-nums text-base">
                    {employees} pessoas
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>2 pessoas</span>
                  <span>50</span>
                  <span>100 pessoas</span>
                </div>
              </div>

              {/* Slider 2: Hours wasted */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-300 font-medium">
                    Horas gastas em retrabalho / conciliações manuais por semana
                  </span>
                  <span className="font-mono font-bold text-amber-400 tabular-nums text-base">
                    {hoursPerWeek}h / semana
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>2 horas</span>
                  <span>12 horas</span>
                  <span>25 horas</span>
                </div>
              </div>

              {/* Slider 3: Hourly Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-300 font-medium">
                    Custo médio da hora do colaborador (com encargos)
                  </span>
                  <span className="font-mono font-bold text-amber-400 tabular-nums text-base">
                    R$ {hourlyRate},00 / h
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="250"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>R$ 25/h</span>
                  <span>R$ 130/h</span>
                  <span>R$ 250/h</span>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Modelo baseado em médias de projetos reais executados pela Apollo Company.</span>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Impacto Operacional & Financeiro Projetado
              </div>

              {/* Big Metric Display */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-xs font-medium text-slate-400">
                  Economia Financeira Anual Estimada
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tabular-nums tracking-tight">
                  R$ {annualSavingsEstimated.toLocaleString("pt-BR")}
                </div>
                <p className="text-xs text-slate-400 pt-1">
                  Recursos que deixam de ser dissipados em ineficiências e retrabalhos de rotina.
                </p>
              </div>

              {/* Secondary Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400">
                    Horas Recuperadas / Mês
                  </span>
                  <div className="text-2xl font-bold text-white font-mono tabular-nums">
                    {hoursRecoveredPerMonth.toLocaleString("pt-BR")} h
                  </div>
                  <span className="text-[11px] text-slate-400 block">
                    Tempo devolvido ao foco comercial
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400">
                    Ganho de Capacidade
                  </span>
                  <div className="text-2xl font-bold text-emerald-400 font-mono tabular-nums flex items-center gap-1">
                    <span>+{efficiencyGainPercent}%</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-[11px] text-slate-400 block">
                    Mais entregas com a mesma equipe
                  </span>
                </div>

              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={onScheduleCall}
                className="w-full py-3.5 px-6 text-xs font-bold tracking-wide text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Solicitar Auditoria de Processos para Minha Empresa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
