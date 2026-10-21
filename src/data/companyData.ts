export interface CompanyData {
  razaoSocial: string;
  nomeFantasia: string;
  dataConstituicao: string;
  porte: string;
  naturezaJuridica: string;
  situacaoCadastral: string;
  dataSituacaoCadastral: string;
  cnaePrincipal: {
    codigo: string;
    descricao: string;
  };
  cnaesSecundarios: Array<{
    codigo: string;
    descricao: string;
    area: string;
  }>;
  endereco: {
    logradouro: string;
    numero: string;
    complemento: string;
    cep: string;
    bairro: string;
    municipio: string;
    uf: string;
    caixaPostal: string;
  };
  contato: {
    email: string;
    telefone: string;
    telefoneClean: string;
  };
}

export const OFFICIAL_COMPANY_DATA: CompanyData = {
  razaoSocial: "APOLLO COMPANY GESTAO E PROCESSOS LTDA",
  nomeFantasia: "APOLLO COMPANY",
  dataConstituicao: "11/08/2016",
  porte: "ME",
  naturezaJuridica: "206-2 - Sociedade Empresária Limitada",
  situacaoCadastral: "ATIVA",
  dataSituacaoCadastral: "11/08/2016",
  cnaePrincipal: {
    codigo: "70.20-4-00",
    descricao: "Atividades de consultoria em gestão empresarial, exceto consultoria técnica específica",
  },
  cnaesSecundarios: [
    {
      codigo: "82.11-3-00",
      descricao: "Serviços combinados de escritório e apoio administrativo",
      area: "BPO & Processos",
    },
    {
      codigo: "85.99-6-04",
      descricao: "Treinamento em desenvolvimento profissional e gerencial",
      area: "Educação Corporativa",
    },
    {
      codigo: "85.50-3-02",
      descricao: "Atividades de apoio à educação, exceto caixas escolares",
      area: "Educação Corporativa",
    },
    {
      codigo: "74.90-1-04",
      descricao: "Atividades de intermediação e agenciamento de serviços e negócios em geral, exceto imobiliários",
      area: "Intermediação B2B",
    },
    {
      codigo: "46.14-1-00",
      descricao: "Representantes comerciais e agentes do comércio de máquinas, equipamentos, embarcações e aeronaves",
      area: "Representação Comercial",
    },
    {
      codigo: "46.18-4-99",
      descricao: "Outros representantes comerciais e agentes do comércio especializado em produtos não especificados anteriormente",
      area: "Representação Comercial",
    },
    {
      codigo: "73.19-0-02",
      descricao: "Promoção de vendas",
      area: "Estratégia de Vendas",
    },
    {
      codigo: "73.19-0-03",
      descricao: "Marketing direto",
      area: "Estratégia de Vendas",
    },
    {
      codigo: "63.19-4-00",
      descricao: "Portais, provedores de conteúdo e outros serviços de informação na internet",
      area: "Inteligência & Digital",
    },
    {
      codigo: "58.11-5-00",
      descricao: "Edição de livros",
      area: "Publicações & Gestão do Conhecimento",
    },
  ],
  endereco: {
    logradouro: "AV PAULISTA",
    numero: "1471",
    complemento: "EDIF BARAO DE CRISTINA SALA 1110 CXPST 6112",
    cep: "01.311-927",
    bairro: "BELA VISTA",
    municipio: "SAO PAULO",
    uf: "SP",
    caixaPostal: "6112",
  },
  contato: {
    email: "LSSMELO@GMAIL.COM",
    telefone: "(91) 3266-5900",
    telefoneClean: "559132665900",
  },
};

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  cnae: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metrics: string;
}

export const SERVICES_LIST: ServicePillar[] = [
  {
    id: "gestao-estrategica",
    number: "01",
    title: "Consultoria em Gestão Empresarial",
    cnae: "CNAE 70.20-4-00",
    tagline: "Diagnóstico profundo, planejamento de longo prazo e governança corporativa.",
    description: "Estruturação de planos diretores, revisão de modelos de negócio, implantação de conselhos consultivos e definição de matrizes de metas (OKR/KPI) para empresas que buscam expansão ordenada e sustentável.",
    deliverables: [
      "Diagnóstico 360° de maturidade e eficiência organizacional",
      "Modelagem e acompanhamento de OKRs e metas executivas",
      "Reestruturação de governança corporativa e sucessão",
      "Auditoria de gargalos estratégicos e planos de contingência",
    ],
    metrics: "+38% de clareza estratégica e velocidade de deliberação",
  },
  {
    id: "processos-bpo",
    number: "02",
    title: "Otimização de Processos & BPO Administrativo",
    cnae: "CNAE 82.11-3-00",
    tagline: "Engenharia de esteiras de trabalho, eliminação de desperdício e suporte operacional.",
    description: "Mapeamento rigoroso de fluxos (BPMN), desenho de procedimentos operacionais padrão (POPs), automação de rotinas burocráticas e gestão compartilhada de serviços administrativos para liberação de tempo core do negócio.",
    deliverables: [
      "Mapeamento e redesenho de processos ponta a ponta (BPMN)",
      "Elaboração de Manuais de Procedimento Padrão (POPs)",
      "Redução de retrabalho e tempos de ciclo operacional",
      "Suporte combinado e terceirização de rotinas de backoffice",
    ],
    metrics: "Economia média de 140+ horas operacionais/mês",
  },
  {
    id: "intermediacao-representacao",
    number: "03",
    title: "Intermediação de Negócios & Representação",
    cnae: "CNAE 74.90-1-04 · 46.14-1-00 · 46.18-4-99",
    tagline: "Conexão estratégica entre indústrias, equipamentos especializados e grandes compradores.",
    description: "Atuação como ponte comercial qualificada na negociação de máquinas, equipamentos industriais e parcerias corporativas complexas, com rigor de compliance, diligência comercial e geração de valor bilateral.",
    deliverables: [
      "Representação comercial técnica de máquinas e equipamentos",
      "Intermediação de acordos e alianças estratégicas B2B",
      "Prospecção de grandes contas institucionais e industriais",
      "Negociação estruturada e formalização contratual",
    ],
    metrics: "R$ 18M+ em negociações intermediadas e contratos estruturados",
  },
  {
    id: "educacao-corporativa",
    number: "04",
    title: "Treinamento & Desenvolvimento Gerencial",
    cnae: "CNAE 85.99-6-04 · 85.50-3-02",
    tagline: "Capacitação de lideranças e equipes para execução de excelência.",
    description: "Programas de educação executiva focados em tomada de decisão baseada em dados, liderança de equipes ágeis, gestão de conflitos organizacionais e elevação de competências técnicas dos quadros gerenciais.",
    deliverables: [
      "Workshops executivos para média e alta liderança",
      "Programas customizados de imersão em gestão de processos",
      "Métricas de retenção e aplicação prática de competências",
      "Trilhas de formação continuada para equipes operacionais",
    ],
    metrics: "94% de adesão em mudanças organizacionais pós-treinamento",
  },
  {
    id: "estrategia-comercial",
    number: "05",
    title: "Promoção de Vendas & Estratégia de Mercado",
    cnae: "CNAE 73.19-0-02 · 73.19-0-03",
    tagline: "Tração comercial orientada a resultados e expansão de canais diretos.",
    description: "Estruturação do funil de vendas corporativo, playbook de prospecção consultiva ativa, campanhas de marketing direto B2B e alinhamento entre estratégia de produto e forças de vendas em campo.",
    deliverables: [
      "Elaboração de Playbook Comercial e roteiros de qualificação",
      "Campanhas de marketing direto consultivo e prospecção ativa",
      "Mapeamento do ciclo de decisão e objeções de compra",
      "Otimização de taxas de conversão de propostas comerciais",
    ],
    metrics: "+45% de conversão em propostas comerciais corporativas",
  },
  {
    id: "inteligencia-publicacoes",
    number: "06",
    title: "Inteligência de Mercado & Gestão do Conhecimento",
    cnae: "CNAE 63.19-4-00 · 58.11-5-00",
    tagline: "Documentação executiva, portais de informação e conteúdo especializado.",
    description: "Desenvolvimento de portais corporativos de conhecimento interno, relatórios de inteligência competitiva e edição de manuais e publicações institucionais para perenizar o saber técnico da organização.",
    deliverables: [
      "Desenvolvimento de bases de conhecimento e portais internos",
      "Edição e publicação de manuais técnicos e institucionais",
      "Pesquisas setoriais de benchmark e inteligência de mercado",
      "Padronização de ativos de conhecimento corporativo",
    ],
    metrics: "100% de documentação e retenção de know-how crítico",
  },
];

export interface CaseStudy {
  title: string;
  clientSector: string;
  challenge: string;
  action: string;
  result: string;
  highlightMetric: string;
  metricLabel: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Reestruturação de Processos e Backoffice para Distribuidora",
    clientSector: "Logística e Distribuição Comercial",
    challenge: "Fluxos de pedidos fragmentados geravam 4 dias de atraso na expedição e dependência de planilhas despadronizadas.",
    action: "Mapeamento completo dos 14 processos-chave, implantação de BPO com rotinas automatizadas e treinamento gerencial.",
    result: "Redução de 72% no tempo de faturamento e zero perda de pedidos no fechamento contábil.",
    highlightMetric: "-72%",
    metricLabel: "Tempo de Ciclo de Pedidos",
  },
  {
    title: "Intermediação Comercial de Linhas de Equipamentos Industriais",
    clientSector: "Manufatura e Bens de Capital",
    challenge: "Fabricante com dificuldade de acesso a grandes polos industriais do Sudeste e Norte do país.",
    action: "Assunção da representação técnica, mapeamento de contas-alvo e condução de negociações estratégicas de alto ticket.",
    result: "Fechamento de 6 contratos corporativos multianuais nos primeiros 10 meses de atuação.",
    highlightMetric: "R$ 6.4M",
    metricLabel: "Volume em Contratos Viabilizados",
  },
  {
    title: "Programa de Governança e Capacitação de Lideranças",
    clientSector: "Serviços Especializados",
    challenge: "Fundadores sobrecarregados com decisões cotidianas operacionais e ausência de indicadores de gestão claros.",
    action: "Estruturação de comitê executivo quinzenal, treinamento de 18 coordenadores e implantação de painel de KPIs.",
    result: "Autonomia de 80% das deliberações setoriais transferidas com segurança aos novos líderes.",
    highlightMetric: "+80%",
    metricLabel: "Autonomia Operacional Descentralizada",
  },
];
