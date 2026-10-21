export interface QuestionOption {
  text: string;
  score: number; // 1 to 4
  feedback: string;
}

export interface DiagnosticPillar {
  id: string;
  title: string;
  subtitle: string;
  question: string;
  options: QuestionOption[];
}

export const DIAGNOSTIC_PILLARS: DiagnosticPillar[] = [
  {
    id: "processos",
    title: "Processos & Operações",
    subtitle: "Mapeamento, POPs e fluidez de rotinas de trabalho",
    question: "Como estão documentados e executados os processos diários na sua empresa?",
    options: [
      {
        text: "Processos não documentados; dependência total da memória das pessoas.",
        score: 1,
        feedback: "Alto risco de gargalos, erros frequentes e dependência crítica de indivíduos específicos.",
      },
      {
        text: "Algumas instruções dispersas em mensagens ou e-mails, sem padrão formal.",
        score: 2,
        feedback: "Estrutura básica, mas com frequente retrabalho e dificuldade de integração de novos membros.",
      },
      {
        text: "Processos principais mapeados em manuais, mas nem sempre revisados ou seguidos à risca.",
        score: 3,
        feedback: "Boa base formal; o próximo passo é automação, auditoria de adesão e métricas de tempo de ciclo.",
      },
      {
        text: "Processos totalmente mapeados (BPMN), monitorados por indicadores e com melhoria contínua ativa.",
        score: 4,
        feedback: "Maturidade de excelência operacional com esteiras enxutas e alta previsibilidade.",
      },
    ],
  },
  {
    id: "governanca",
    title: "Governança & Liderança",
    subtitle: "Tomada de decisão, autonomia de equipes e ritmo de gestão",
    question: "Como são tomadas as decisões estratégicas e operacionais no dia a dia?",
    options: [
      {
        text: "Todas as decisões passam pelos donos/diretores; líderes têm pouca autonomia.",
        score: 1,
        feedback: "Sobrecarga executiva nos sócios, lentidão em respostas ao mercado e desmotivação de lideranças.",
      },
      {
        text: "Reuniões esporádicas quando surgem crises; delegação parcial sem diretrizes formais.",
        score: 2,
        feedback: "A gestão atua de forma reativa; ausência de rotina executiva estruturada de alinhamento.",
      },
      {
        text: "Reuniões periódicas estruturadas com pauta e metas gerais definidas.",
        score: 3,
        feedback: "Boa cadência; recomendável consolidar rituais de conselho e matriz formal de alçadas de decisão.",
      },
      {
        text: "Comitês executivos consolidados, governança ágil com matriz RACI e conselho atuante.",
        score: 4,
        feedback: "Governança sólida que suporta escala, captação de sócios/investidores e sucessão segura.",
      },
    ],
  },
  {
    id: "indicadores",
    title: "Gestão Financeira & KPIs",
    subtitle: "DRE gerencial, fluxo de caixa projetado e métricas de performance",
    question: "Qual o nível de precisão e frequência do acompanhamento financeiro e operacional?",
    options: [
      {
        text: "Olhamos apenas o saldo bancário; sem DRE gerencial ou projeção de caixa consistente.",
        score: 1,
        feedback: "Cegueira financeira grave que compromete a precificação e a sobrevivência em oscilações de mercado.",
      },
      {
        text: "Fechamento contábil mensal básico, mas com atraso de mais de 20 dias para análise.",
        score: 2,
        feedback: "Dados históricos tardios que não permitem correções de rota preventivas a tempo.",
      },
      {
        text: "DRE gerencial mensal acompanhada e fluxo de caixa projetado a 30-60 dias.",
        score: 3,
        feedback: "Gestão financeira saudável; oportuno aprofundar indicadores unitários (CAC, LTV, margem de contribuição).",
      },
      {
        text: "Dashboard em tempo real com KPIs operacionais, DRE gerencial analítica e planejamento orçamentário anual.",
        score: 4,
        feedback: "Visão analítica de alta precisão orientada a rentabilidade por linha de negócio.",
      },
    ],
  },
  {
    id: "comercial",
    title: "Vendas & Estratégia Comercial",
    subtitle: "Prospecção ativa, playbook de vendas e intermediação",
    question: "Como sua empresa gera novas oportunidades e fecha contratos corporativos?",
    options: [
      {
        text: "100% dependente de indicações boca a boca ou clientes antigos; sem prospecção ativa.",
        score: 1,
        feedback: "Alta volatilidade de receita e vulnerabilidade à perda de clientes-chave.",
      },
      {
        text: "Prospecção eventual sem roteiro formal ou CRM; taxas de fechamento oscilantes.",
        score: 2,
        feedback: "Esforços dispersos sem mensuração de taxas de conversão por etapa do funil.",
      },
      {
        text: "Funil de vendas desenhado com CRM estruturado e rotina semanal de acompanhamento.",
        score: 3,
        feedback: "Operação comercial consistente; recomendável refinar playbooks e parcerias/intermediações B2B.",
      },
      {
        text: "Máquina de vendas previsível com prospecção ativa, representantes qualificados e inteligência de mercado.",
        score: 4,
        feedback: "Tração comercial madura capaz de sustentar crescimento acelerado com previsibilidade de receita.",
      },
    ],
  },
];
