import React from "react";
import { Card } from "@/ui/Card";
import { UserPlus, Percent, Rocket, GraduationCap, BarChart, Gift, Users, MessageCircle, Trophy, Star } from "lucide-react";

const benefits = [
  {
    icon: UserPlus,
    title: "Bônus por Indicação Realizada",
    desc: "Indique amigos e ganhe bônus em PIX por cada novo cadastro e reserva."
  },
  {
    icon: Percent,
    title: "Descontos Exclusivos com Fornecedores Parceiros",
    desc: "Acesse cupons e ofertas especiais para comprar barato e revender."
  },
  {
    icon: Rocket,
    title: "Comece Seu Negócio com Baixo Investimento",
    desc: "Empreenda como expositor mesmo sem estoque inicial."
  },
  {
    icon: GraduationCap,
    title: "Acesso a Treinamentos Básicos de Empreendedorismo",
    desc: "Vídeos e conteúdos exclusivos para iniciar seu negócio com segurança."
  },
  {
    icon: BarChart,
    title: "Painel de Controle de Indicações e Ganhos",
    desc: "Veja todos os seus bônus, ganhos acumulados e status de pagamento."
  },
  {
    icon: Trophy,
    title: "Sorteios e Premiações Mensais",
    desc: "Participe automaticamente de sorteios e concorra a prêmios."
  },
  {
    icon: Users,
    title: "Benefício Compartilhado com os Indicados",
    desc: "Seus indicados também ganham bônus ou descontos especiais."
  },
  {
    icon: MessageCircle,
    title: "Contato Direto com Fornecedores Parceiros",
    desc: "Negocie direto pelo WhatsApp ou redes sociais dos fornecedores."
  },
  {
    icon: Gift,
    title: "Canal para Sugestões e Feedbacks com Recompensas",
    desc: "Dê ideias para o app e seja recompensado por sugestões aprovadas."
  },
  {
    icon: Star,
    title: "Sistema de Gamificação com Ranking e Níveis de Recompensas",
    desc: "Suba no ranking, desbloqueie prêmios e vantagens especiais."
  }
];

export const ClientBenefits = () => (
  <div className="my-4">
    <h2 className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-1 pb-3 pt-5">Benefícios para Clientes</h2>
    <div className="flex flex-col gap-3">
      {benefits.map((item, i) => {
        const Icon = item.icon;
        return (
          <Card key={i} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div className="text-[#181711] flex items-center justify-center rounded-lg bg-[#f4f4f0] shrink-0 size-12">
              <Icon size={24} />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181711] text-base font-medium leading-normal line-clamp-1">{item.title}</p>
              <p className="text-[#898261] text-xs font-normal leading-normal line-clamp-2">{item.desc}</p>
            </div>
          </Card>
        );
      })}
    </div>
  </div>
); 