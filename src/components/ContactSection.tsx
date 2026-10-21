import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle, MessageSquare } from "lucide-react";
import { OFFICIAL_COMPANY_DATA, SERVICES_LIST } from "../data/companyData";

interface ContactSectionProps {
  initialService?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, initialMessage }) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    servico: initialService || "gestao-estrategica",
    porte: "Médio Porte",
    mensagem: initialMessage || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.nome.trim() || formData.nome.trim().length < 3) {
      errs.nome = "Por favor, informe seu nome completo.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Informe um e-mail válido para retorno.";
    }
    if (!formData.telefone.trim() || formData.telefone.trim().length < 8) {
      errs.telefone = "Informe um telefone ou WhatsApp com DDD.";
    }
    if (!formData.empresa.trim()) {
      errs.empresa = "Informe a razão social ou nome da sua empresa.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      servico: "gestao-estrategica",
      porte: "Médio Porte",
      mensagem: "",
    });
    setIsSubmitted(false);
  };

  // WhatsApp click generator
  const selectedServiceObj = SERVICES_LIST.find((s) => s.id === formData.servico);
  const serviceName = selectedServiceObj ? selectedServiceObj.title : "Consultoria";

  const waText = encodeURIComponent(
    `Olá, equipe Apollo Company! Meu nome é ${formData.nome || "um cliente"} da empresa ${formData.empresa || "minha empresa"}. Gostaria de solicitar um diagnóstico estratégico sobre: ${serviceName}. ${formData.mensagem ? `Observações: ${formData.mensagem}` : ""}`
  );
  const waUrl = `https://wa.me/${OFFICIAL_COMPANY_DATA.contato.telefoneSPClean}?text=${waText}`;

  const mailtoSubject = encodeURIComponent(`Solicitação de Diagnóstico Estratégico - ${formData.empresa || "Apollo Company"}`);
  const mailtoBody = encodeURIComponent(
    `Nome: ${formData.nome}\nEmpresa: ${formData.empresa}\nTelefone: ${formData.telefone}\nE-mail: ${formData.email}\nPorte: ${formData.porte}\nServiço de Interesse: ${serviceName}\n\nMensagem / Desafio:\n${formData.mensagem}`
  );
  const mailtoUrl = `mailto:${OFFICIAL_COMPANY_DATA.contato.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contato" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Corporate Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Atendimento Executivo
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
                Inicie um diálogo estratégico com a Apollo Company.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Nossa equipe sênior analisa seu contexto de negócios e responde em até 24 horas úteis
                para estruturação do diagnóstico preliminar.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              
              {/* Telefone SP / WhatsApp */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="text-xs text-slate-400 flex items-center justify-between">
                    <span>São Paulo & WhatsApp Comercial</span>
                    <span className="text-[10px] text-emerald-400 font-medium">Atendimento Rápido</span>
                  </div>
                  <a
                    href={`tel:${OFFICIAL_COMPANY_DATA.contato.telefoneSPClean}`}
                    className="text-base font-bold text-white hover:text-amber-400 font-mono tabular-nums transition-colors block"
                  >
                    {OFFICIAL_COMPANY_DATA.contato.telefoneSP}
                  </a>
                  <div className="text-[11px] text-slate-400">Ligação direta ou mensagens de WhatsApp</div>
                </div>
              </div>

              {/* Central Telefônica */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="text-xs text-slate-400">Central Telefônica Corporativa</div>
                  <a
                    href={`tel:${OFFICIAL_COMPANY_DATA.contato.telefoneClean}`}
                    className="text-base font-bold text-white hover:text-amber-400 font-mono tabular-nums transition-colors block"
                  >
                    {OFFICIAL_COMPANY_DATA.contato.telefone}
                  </a>
                  <div className="text-[11px] text-slate-400">Segunda a Sexta · 08h30 às 18h30</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs text-slate-400">E-mail Corporativo Direto</div>
                  <a
                    href={`mailto:${OFFICIAL_COMPANY_DATA.contato.email}`}
                    className="text-sm font-bold text-white hover:text-amber-400 transition-colors block lowercase"
                  >
                    {OFFICIAL_COMPANY_DATA.contato.email}
                  </a>
                  <div className="text-[11px] text-slate-400">Retorno em até 24 horas úteis</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs text-slate-400">Sede Operacional</div>
                  <div className="text-xs font-bold text-white">
                    Edifício Barão de Cristina · Sala 1110
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Av. Paulista, 1471 · Bela Vista, São Paulo - SP · CEP 01.311-927
                  </div>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Quick Button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Abrir Conversa Direta no WhatsApp</span>
            </a>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-lg font-bold text-white">
                    Solicitar Diagnóstico Estratégico Preliminar
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Preencha os dados abaixo para receber uma avaliação personalizada dos processos da sua empresa.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Carlos Albuquerque"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs bg-slate-950 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.nome ? "border-rose-500" : "border-slate-800 focus:border-amber-400"
                      }`}
                    />
                    {errors.nome && <span className="text-[11px] text-rose-400">{errors.nome}</span>}
                  </div>

                  {/* Empresa */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Nome da Empresa / Razão Social *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Indústria Alfa S/A"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs bg-slate-950 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.empresa ? "border-rose-500" : "border-slate-800 focus:border-amber-400"
                      }`}
                    />
                    {errors.empresa && <span className="text-[11px] text-rose-400">{errors.empresa}</span>}
                  </div>

                  {/* E-mail */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      placeholder="seu.nome@suaempresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs bg-slate-950 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? "border-rose-500" : "border-slate-800 focus:border-amber-400"
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-rose-400">{errors.email}</span>}
                  </div>

                  {/* Telefone / WhatsApp */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Telefone / WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      placeholder="(11) 98765-4321"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs bg-slate-950 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.telefone ? "border-rose-500" : "border-slate-800 focus:border-amber-400"
                      }`}
                    />
                    {errors.telefone && <span className="text-[11px] text-rose-400">{errors.telefone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Linha de Serviço */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Solução de Principal Interesse
                    </label>
                    <select
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                    >
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.number}. {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Porte da Empresa */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Porte da Empresa
                    </label>
                    <select
                      value={formData.porte}
                      onChange={(e) => setFormData({ ...formData, porte: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Microempresa (ME)">Microempresa (ME)</option>
                      <option value="Empresa de Pequeno Porte (EPP)">Empresa de Pequeno Porte (EPP)</option>
                      <option value="Médio Porte">Médio Porte (10 a 99 colaboradores)</option>
                      <option value="Grande Porte">Grande Porte (100+ colaboradores)</option>
                    </select>
                  </div>
                </div>

                {/* Mensagem / Contexto */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Desafio Operacional ou Objetivo Principal (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Descreva brevemente os gargalos de processos, volume de rotinas ou oportunidade de expansão..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs font-bold tracking-wide text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Solicitação de Diagnóstico</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Garantia de confidencialidade comercial conforme termos da LGPD e código de ética da Apollo Company.
                </p>
              </form>
            ) : (
              /* Success / Confirmation state */
              <div className="space-y-6 py-6 text-center animate-fade-in">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">
                    Solicitação Recebida com Sucesso!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Obrigado, <strong className="text-white">{formData.nome}</strong>. Registramos o interesse da empresa{" "}
                    <strong className="text-white">{formData.empresa}</strong> na solução{" "}
                    <span className="text-amber-400 font-semibold">{serviceName}</span>.
                  </p>
                </div>

                {/* Action Shortcuts */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs space-y-3">
                  <div className="font-semibold text-slate-300">
                    Deseja acelerar o contato imediatamente?
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={mailtoUrl}
                      className="px-4 py-2 bg-slate-900 border border-slate-700 hover:border-amber-400 rounded-lg text-white font-medium text-center transition-colors block"
                    >
                      Enviar Cópia por E-mail
                    </a>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-emerald-600/30 border border-emerald-500/40 hover:bg-emerald-600/50 rounded-lg text-emerald-300 font-medium text-center transition-colors block"
                    >
                      Chamar no WhatsApp
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleResetForm}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer underline"
                >
                  Enviar outra mensagem ou alterar dados
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
