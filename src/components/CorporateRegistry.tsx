import React, { useState } from "react";
import { Check, Copy, ShieldCheck, Building2, MapPin, Mail, Phone, Calendar, Search } from "lucide-react";
import { OFFICIAL_COMPANY_DATA } from "../data/companyData";

export const CorporateRegistry: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [cnaeFilter, setCnaeFilter] = useState("");

  const handleCopy = () => {
    const textToCopy = `DADOS CADASTRAIS - APOLLO COMPANY
Razão Social: ${OFFICIAL_COMPANY_DATA.razaoSocial}
Nome Fantasia: ${OFFICIAL_COMPANY_DATA.nomeFantasia}
Data de Constituição: ${OFFICIAL_COMPANY_DATA.dataConstituicao}
Situação Cadastral: ${OFFICIAL_COMPANY_DATA.situacaoCadastral} (desde ${OFFICIAL_COMPANY_DATA.dataSituacaoCadastral})
Porte: ${OFFICIAL_COMPANY_DATA.porte}
Natureza Jurídica: ${OFFICIAL_COMPANY_DATA.naturezaJuridica}
Endereço: ${OFFICIAL_COMPANY_DATA.endereco.logradouro}, ${OFFICIAL_COMPANY_DATA.endereco.numero}, ${OFFICIAL_COMPANY_DATA.endereco.complemento}
Bairro: ${OFFICIAL_COMPANY_DATA.endereco.bairro} - São Paulo / SP - CEP: ${OFFICIAL_COMPANY_DATA.endereco.cep}
CNAE Principal: ${OFFICIAL_COMPANY_DATA.cnaePrincipal.codigo} - ${OFFICIAL_COMPANY_DATA.cnaePrincipal.descricao}
E-mail: ${OFFICIAL_COMPANY_DATA.contato.email}
Telefone: ${OFFICIAL_COMPANY_DATA.contato.telefone}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredCnaes = OFFICIAL_COMPANY_DATA.cnaesSecundarios.filter(
    (c) =>
      c.codigo.toLowerCase().includes(cnaeFilter.toLowerCase()) ||
      c.descricao.toLowerCase().includes(cnaeFilter.toLowerCase()) ||
      c.area.toLowerCase().includes(cnaeFilter.toLowerCase())
  );

  return (
    <section id="transparencia" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Transparência & Conformidade Jurídica
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Dados Cadastrais Oficiais da Empresa
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Informações oficiais registradas junto à Receita Federal do Brasil e aos órgãos competentes.
              Solidez jurídica para homologação de fornecedores e acordos de grande porte.
            </p>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="px-4 py-2.5 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-200 hover:text-white transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copiado para a Área de Transferência!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copiar Ficha Cadastral (Homologação)</span>
              </>
            )}
          </button>
        </div>

        {/* Corporate Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Official Details Box */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="border-b border-slate-800 pb-5 flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Razão Social
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                  {OFFICIAL_COMPANY_DATA.razaoSocial}
                </h3>
                <div className="text-xs text-slate-300 mt-1">
                  Nome Fantasia: <strong className="text-white">{OFFICIAL_COMPANY_DATA.nomeFantasia}</strong>
                </div>
              </div>
              
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0" title="Situação Cadastral Ativa">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            {/* Quick Grid of registration parameters */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-slate-400">Data de Constituição</span>
                <div className="font-semibold text-white flex items-center gap-1.5 tabular-nums">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{OFFICIAL_COMPANY_DATA.dataConstituicao}</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400">Situação Cadastral</span>
                <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{OFFICIAL_COMPANY_DATA.situacaoCadastral}</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400">Porte da Empresa</span>
                <div className="font-semibold text-white">
                  {OFFICIAL_COMPANY_DATA.porte} (Microempresa)
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400">Natureza Jurídica</span>
                <div className="font-semibold text-white truncate" title={OFFICIAL_COMPANY_DATA.naturezaJuridica}>
                  {OFFICIAL_COMPANY_DATA.naturezaJuridica}
                </div>
              </div>
            </div>

            {/* Official Headquarters Address */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Endereço da Sede</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {OFFICIAL_COMPANY_DATA.endereco.logradouro}, {OFFICIAL_COMPANY_DATA.endereco.numero}
                <br />
                {OFFICIAL_COMPANY_DATA.endereco.complemento}
                <br />
                Bairro {OFFICIAL_COMPANY_DATA.endereco.bairro} · {OFFICIAL_COMPANY_DATA.endereco.municipio} - {OFFICIAL_COMPANY_DATA.endereco.uf}
                <br />
                <span className="text-slate-300 font-mono">CEP: {OFFICIAL_COMPANY_DATA.endereco.cep}</span>
              </p>
            </div>

            {/* Official Contact Info */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-slate-400 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Telefone
                </span>
                <a
                  href={`tel:${OFFICIAL_COMPANY_DATA.contato.telefoneClean}`}
                  className="font-mono text-white hover:text-amber-400 transition-colors block font-semibold tabular-nums"
                >
                  {OFFICIAL_COMPANY_DATA.contato.telefone}
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  E-mail Oficial
                </span>
                <a
                  href={`mailto:${OFFICIAL_COMPANY_DATA.contato.email}`}
                  className="text-white hover:text-amber-400 transition-colors block lowercase font-medium truncate"
                  title={OFFICIAL_COMPANY_DATA.contato.email}
                >
                  {OFFICIAL_COMPANY_DATA.contato.email}
                </a>
              </div>
            </div>

          </div>

          {/* CNAEs & Economic Activities Section */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Primary CNAE Banner */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-amber-400">
                  Atividade Econômica Principal
                </span>
                <span className="font-mono text-slate-300 font-bold">
                  {OFFICIAL_COMPANY_DATA.cnaePrincipal.codigo}
                </span>
              </div>
              <h4 className="text-base font-bold text-white">
                {OFFICIAL_COMPANY_DATA.cnaePrincipal.descricao}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consultoria e assessoria especializada em planejamento, organização, controle e reestruturação operacional de empresas.
              </p>
            </div>

            {/* Secondary CNAEs Filter & List */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Atividades Econômicas Secundárias ({OFFICIAL_COMPANY_DATA.cnaesSecundarios.length})
                </div>

                {/* Search input for CNAEs */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Filtrar CNAE ou atividade..."
                    value={cnaeFilter}
                    onChange={(e) => setCnaeFilter(e.target.value)}
                    className="pl-8 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 w-full sm:w-56"
                  />
                </div>
              </div>

              {/* CNAEs Scrollable / Clean Grid */}
              <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                {filteredCnaes.map((cnae, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-2"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-amber-400">
                          {cnae.codigo}
                        </span>
                        <span className="text-[11px] text-slate-300 font-medium">
                          · {cnae.area}
                        </span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-normal">
                        {cnae.descricao}
                      </p>
                    </div>
                  </div>
                ))}

                {filteredCnaes.length === 0 && (
                  <div className="text-center py-6 text-xs text-slate-500">
                    Nenhum CNAE correspondente ao termo pesquisado.
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Certidões de regularidade fiscal e FGTS disponíveis para due diligence contratual.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
