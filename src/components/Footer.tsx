import React from "react";
import { OFFICIAL_COMPANY_DATA } from "../data/companyData";

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Corporate Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-sm transform rotate-45" />
              <span className="text-lg font-extrabold tracking-wider text-white">
                {OFFICIAL_COMPANY_DATA.nomeFantasia}
              </span>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              {OFFICIAL_COMPANY_DATA.razaoSocial}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Consultoria estratégica em gestão empresarial, otimização de processos, 
              governança executiva e intermediação comercial. Atuação contínua desde 11 de agosto de 2016.
            </p>

            <div className="text-xs text-slate-400 space-y-0.5">
              <div>Porte: <span className="text-slate-300 font-medium">{OFFICIAL_COMPANY_DATA.porte}</span> · Natureza: <span className="text-slate-300 font-medium">{OFFICIAL_COMPANY_DATA.naturezaJuridica}</span></div>
              <div>Situação Cadastral: <span className="text-emerald-400 font-medium">ATIVA</span> na Receita Federal do Brasil</div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navegação
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo("solucoes")}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Soluções Especializadas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("maturidade")}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Diagnóstico de Maturidade de Gestão
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("calculadora")}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Calculadora de Eficiência & ROI
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("casos")}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Casos de Transformação
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("transparencia")}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Ficha Cadastral & CNAEs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("localizacao")}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Sede Avenida Paulista
                </button>
              </li>
            </ul>
          </div>

          {/* Sede & Contato */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Endereço da Sede & Canais
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              {OFFICIAL_COMPANY_DATA.endereco.logradouro}, {OFFICIAL_COMPANY_DATA.endereco.numero}
              <br />
              {OFFICIAL_COMPANY_DATA.endereco.complemento}
              <br />
              {OFFICIAL_COMPANY_DATA.endereco.bairro} · {OFFICIAL_COMPANY_DATA.endereco.municipio} - {OFFICIAL_COMPANY_DATA.endereco.uf}
              <br />
              CEP: {OFFICIAL_COMPANY_DATA.endereco.cep}
            </p>

            <div className="pt-2 text-xs space-y-1">
              <div>
                <span className="text-slate-400">Telefone: </span>
                <a
                  href={`tel:${OFFICIAL_COMPANY_DATA.contato.telefoneClean}`}
                  className="text-white hover:text-amber-400 font-mono tabular-nums transition-colors font-medium"
                >
                  {OFFICIAL_COMPANY_DATA.contato.telefone}
                </a>
              </div>
              <div>
                <span className="text-slate-400">E-mail: </span>
                <a
                  href={`mailto:${OFFICIAL_COMPANY_DATA.contato.email}`}
                  className="text-white hover:text-amber-400 transition-colors lowercase font-medium"
                >
                  {OFFICIAL_COMPANY_DATA.contato.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2016–{new Date().getFullYear()} {OFFICIAL_COMPANY_DATA.razaoSocial}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>CNAE Principal 70.20-4-00</span>
            <span aria-hidden="true">·</span>
            <span>São Paulo / Brasil</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
