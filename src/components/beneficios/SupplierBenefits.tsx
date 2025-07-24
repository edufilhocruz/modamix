import React from "react";
import { Card } from "@/ui/Card";
import { Image, ShoppingBag, Send, Target, ShieldCheck, BarChart, UserPlus, Store, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Image,
    title: "Banner exclusivo dentro do app",
    desc: "Destaque seu negócio com banner personalizado para expositores."
  },
  {
    icon: ShoppingBag,
    title: "Acesso direto ao público comprador",
    desc: "Conecte-se com expositores prontos para comprar no atacado."
  },
  {
    icon: Send,
    title: "Destaque nos envios semanais",
    desc: "Sua marca promovida nos comunicados semanais do app."
  },
  {
    icon: Target,
    title: "Campanhas de divulgação segmentadas",
    desc: "Promoções e combos direcionados para seu público-alvo."
  },
  {
    icon: ShieldCheck,
    title: "Selo de fornecedor confiável ModaMix",
    desc: "Ganhe autoridade ao manter boas avaliações dos expositores."
  },
  {
    icon: BarChart,
    title: "Relatórios de engajamento do banner",
    desc: "Acompanhe visualizações, cliques e resultados."
  },
  {
    icon: UserPlus,
    title: "Sugestão automática para novos expositores",
    desc: "Seu banner é exibido para novos expositores do seu nicho."
  },
  {
    icon: Store,
    title: "Espaço em eventos presenciais e feiras oficiais",
    desc: "Exponha produtos com prioridade e condições diferenciadas."
  },
  {
    icon: Trophy,
    title: "Campanhas de incentivo com premiação",
    desc: "Participe de campanhas com premiações para expositores."
  }
];

export const SupplierBenefits = () => (
  <div className="my-4">
    <h2 className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-1 pb-3 pt-5">Benefícios para Fornecedores</h2>
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