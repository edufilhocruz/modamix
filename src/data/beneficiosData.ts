export const pointsActions = [
  { action: "Participar da feira com pagamento via app", points: "+2", note: "Presença" },
  { action: "Pagar com 48h ou mais de antecedência", points: "+1", note: "Antecipado" },
  { action: "Indicar novo feirante", points: "+5", note: "Indicação qualificada" },
];

export const rewards = [
  { reward: "R$5 de desconto", points: 25, limit: "1x/mês" },
  { reward: "R$10 de desconto", points: 50, limit: "1x/2 meses" },
];

export const levels = [
  {
    name: "Bronze",
    range: "0 - 5.000 pontos",
    benefits: "Acesso básico, descontos em serviços"
  },
  {
    name: "Prata",
    range: "5.001 - 10.000 pontos",
    benefits: "Acesso prioritário, descontos maiores"
  },
  {
    name: "Ouro",
    range: "10.001 - 20.000 pontos",
    benefits: "Acesso VIP, descontos exclusivos, brindes"
  },
  {
    name: "Diamante",
    range: "20.001+ pontos",
    benefits: "Acesso premium, descontos máximos, eventos exclusivos"
  }
]; 