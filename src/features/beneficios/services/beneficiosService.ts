import { BeneficioAcao, BeneficioRecompensa, BeneficioNivel, BeneficioBonus, BeneficioExtra } from "../types/beneficios";

/**
 * Service para fornecer dados mockados dos benefícios.
 * Troque por chamadas de API futuramente.
 */
export const beneficiosService = {
  getAcoes(): BeneficioAcao[] {
    return [
      { action: "Participar da feira com pagamento via app", points: "+2", note: "Presença" },
      { action: "Pagar com 48h ou mais de antecedência", points: "+1", note: "Antecipado" },
      { action: "Indicar novo feirante", points: "+5", note: "Indicação qualificada" },
    ];
  },
  getRecompensas(): BeneficioRecompensa[] {
    return [
      { reward: "R$5 de desconto", points: 25, limit: "1x/mês" },
      { reward: "R$10 de desconto", points: 50, limit: "1x/2 meses" },
    ];
  },
  getNiveis(): BeneficioNivel[] {
    return [
      { name: "Bronze", range: "0 - 5.000 pontos", benefits: "Acesso básico, descontos em serviços" },
      { name: "Prata", range: "5.001 - 10.000 pontos", benefits: "Acesso prioritário, descontos maiores" },
      { name: "Ouro", range: "10.001 - 20.000 pontos", benefits: "Acesso VIP, descontos exclusivos, brindes" },
      { name: "Diamante", range: "20.001+ pontos", benefits: "Acesso premium, descontos máximos, eventos exclusivos" },
    ];
  },
  getBonuses(): BeneficioBonus[] {
    return [
      { title: "Indicação aprovada", points: "+5 pontos", desc: "Você ganhou 5 pontos por indicar um novo feirante." },
      { title: "Frequência mensal", points: "+3 pontos", desc: "Participou de 5 feiras no mês." },
      { title: "Aniversário", points: "+3 pontos", desc: "Ganhou pontos bônus no seu aniversário." },
    ];
  },
  getExtras(tipo: "organizador" | "fornecedor" | "cliente"): BeneficioExtra[] {
    if (tipo === "organizador") {
      return [
        { title: "Cadastro gratuito da feira", desc: "Sua feira listada e visível para centenas de expositores." },
        { title: "Recebimento automático via Pix", desc: "Receba dos expositores direto, já com comissão descontada." },
      ];
    }
    if (tipo === "fornecedor") {
      return [
        { title: "Banner exclusivo dentro do app", desc: "Destaque seu negócio com banner personalizado para expositores." },
        { title: "Acesso direto ao público comprador", desc: "Conecte-se com expositores prontos para comprar no atacado." },
      ];
    }
    return [
      { title: "Bônus por Indicação Realizada", desc: "Indique amigos e ganhe bônus em PIX por cada novo cadastro e reserva." },
      { title: "Descontos Exclusivos com Fornecedores Parceiros", desc: "Acesse cupons e ofertas especiais para comprar barato e revender." },
    ];
  }
}; 