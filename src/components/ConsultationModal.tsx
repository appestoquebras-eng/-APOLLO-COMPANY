import React, { useState } from "react";
import { X, Send, CheckCircle2, MessageSquare, Phone, Mail } from "lucide-react";
import { OFFICIAL_COMPANY_DATA, SERVICES_LIST, ServicePillar } from "../data/companyData";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServicePillar | null;
  diagnosticResult?: {
    score: number;
    level: string;
  } | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  selectedService,
  diagnosticResult,
}) => {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servicoId, setServicoId] = useState(selectedService?.id || "gestao-estrategica");
  const [mensagem, setMensagem] = useState(
    diagnosticResult
      ? `Olá, realizei o teste de maturidade (Índice: ${diagnosticResult.score}% - ${diagnosticResult.level}) e gostaria de agendar uma reunião de aprofundamento.`
      : ""
  );
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !empresa.trim() || !email.trim() || !telefone.trim()) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const selectedSvc = SERVICES_LIST.find((s) => s.id === servicoId);

  const waText = encodeURIComponent(
    `Olá, Apollo Company! Meu nome é ${nome || "um cliente"} da empresa ${empresa || "minha empresa"}. Gostaria de solicitar atendimento para: ${selectedSvc?.title || "Consultoria"}. ${mensagem ? `Mensagem: ${mensagem}` : ""}`
  );
  const waUrl = `https://wa.me/${OFFICIAL_COMPANY_DATA.contato.telefoneClean}?text=${waText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                Atendimento Executivo · Av. Paulista
              </div>
              <h3 className="text-xl font-bold text-white">
                Agendar Diagnóstico Estratégico
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Converse diretamente com os consultores seniores da Apollo Company.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Seu Nome *</label>
                <input
                  type="text"
                  required
                  placeholder="Carlos Silva"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Sua Empresa *</label>
                <input
                  type="text"
                  required
                  placeholder="Empresa LTDA"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">E-mail Corporativo *</label>
                <input
                  type="email"
                  required
                  placeholder="carlos@empresa.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Telefone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 98765-4321"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Área de Atuação</label>
              <select
                value={servicoId}
                onChange={(e) => setServicoId(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
              >
                {SERVICES_LIST.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.number}. {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Mensagem Adicional</label>
              <textarea
                rows={2}
                placeholder="Detalhes sobre sua operação..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Confirmar Agendamento</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Solicitação Encaminhada!</h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Agradecemos o contato, <strong className="text-white">{nome}</strong>. Nossa equipe técnica da Avenida Paulista entrará em contato em breve.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div>Quer adiantar pelo WhatsApp corporativo?</div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600/30 border border-emerald-500/40 hover:bg-emerald-600/50 text-emerald-300 font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Conversar Agora no WhatsApp</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Fechar Janela
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
