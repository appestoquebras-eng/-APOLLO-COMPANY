import React, { useState } from "react";
import { MapPin, Navigation, Building, Clock, Phone, ExternalLink } from "lucide-react";
import { OFFICIAL_COMPANY_DATA } from "../data/companyData";

export const PaulistaLocation: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Av. Paulista, 1471, Bela Vista, São Paulo - SP, 01311-927"
  )}`;

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    "Av. Paulista, 1471, Bela Vista, São Paulo - SP"
  )}`;

  return (
    <section id="localizacao" className="py-20 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Presença Estratégica
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Sede no epicentro financeiro e corporativo do Brasil
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Nossa sede operacional está situada na Avenida Paulista, facilitando o acesso para reuniões
            de conselho, comitês executivos presenciais e relacionamento institucional de alto nível.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Architectural Image */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl relative">
            <div className="aspect-[4/3] w-full relative">
              <img
                src="/src/assets/images/paulista_business_tower_1792600940577.jpg"
                alt="Avenida Paulista e torre corporativa da sede da Apollo Company em São Paulo"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imgLoaded ? "opacity-100" : "opacity-90"
                }`}
                referrerPolicy="no-referrer"
                onLoad={() => setImgLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-left">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  <Building className="w-3.5 h-3.5" />
                  <span>Edifício Barão de Cristina · Sala 1110</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Av. Paulista, 1471 · Bela Vista, São Paulo - SP
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-mono">
                  CEP 01311-927 · Caixa Postal 6112
                </div>
              </div>
            </div>
          </div>

          {/* Details & Visiting Instructions */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Mobilidade Urbana</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A apenas <strong>180 metros</strong> da Estação Trianon-MASP (Linha 2 - Verde do Metrô). Acesso rápido por transporte público ou táxi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Ponto de Referência</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Entre a Alameda Casa Branca e Rua Peixoto Gomide, em frente à área verde do Parque Tenente Siqueira Campos (Trianon).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Horário de Atendimento</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Segunda a Sexta, das <strong>08h30 às 18h30</strong>. Reuniões presenciais de diretoria mediante agendamento prévio.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Canal Telefônico Direto</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Atendimento executivo nacional pelo telefone <strong>(91) 3266-5900</strong> e recepção presencial em São Paulo.
                </p>
              </div>

            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300 text-center sm:text-left">
                Precisa comparecer para uma reunião presencial? Abra a rota nos seus aplicativos:
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400 text-white transition-all flex items-center gap-1.5"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400 text-white transition-all flex items-center gap-1.5"
                >
                  <span>Waze</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
