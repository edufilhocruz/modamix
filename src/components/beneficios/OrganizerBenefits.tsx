import React from "react";
import { Card } from "@/ui/Card";
import { ClipboardList, DollarSign, Users, Share2, TrendingUp, Megaphone } from "lucide-react";

const benefits = [
  {
    icon: ClipboardList,
    title: "Cadastro gratuito da feira",
    desc: "Sua feira listada e visível para centenas de expositores."
  },
  {
    icon: DollarSign,
    title: "Recebimento automático via Pix",
    desc: "Receba dos expositores direto, já com comissão descontada."
  },
  {
    icon: Users,
    title: "Acesso à lista de expositores confirmados",
    desc: "Veja nomes, contatos e categorias em tempo real."
  },
  {
    icon: Share2,
    title: "Divulgação contínua e gratuita",
    desc: "Sua feira ganha visibilidade nas redes oficiais do ModaMix."
  },
  {
    icon: TrendingUp,
    title: "Bônus por alta ocupação",
    desc: "Receba bônus financeiro ou créditos ao atingir alta ocupação."
  },
  {
    icon: Megaphone,
    title: "Divulgação por influenciadores e parceiros",
    desc: "Parcerias ampliam o alcance da sua feira sem custo extra."
  }
];

export const OrganizerBenefits = () => (
  <div className="my-4">
    <h2 className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-1 pb-3 pt-5">Benefícios para Organizadores</h2>
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