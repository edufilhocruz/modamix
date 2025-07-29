import React from "react";
import { Card } from "../ui/Card";
import { useBeneficios } from "../hooks/useBeneficios";
import { Percent, Bed, Gift, Star } from "lucide-react";

/**
 * Lista de recompensas para troca de pontos, exibidas como cards.
 * Usa dados do hook de benefícios.
 */
export const RewardsTable = React.memo(() => {
  const { recompensas } = useBeneficios();
  const icons = [Percent, Bed, Gift, Star];
  return (
    <div className="my-4">
      <h2 className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-1 pb-3 pt-5">Troque Seus Pontos</h2>
      <div className="flex flex-col gap-3">
        {recompensas.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Card key={item.reward} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#181711] flex items-center justify-center rounded-lg bg-[#f4f4f0] shrink-0 size-12">
                <Icon size={24} />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#181711] text-base font-medium leading-normal line-clamp-1">{item.reward}</p>
                <p className="text-[#898261] text-sm font-normal leading-normal line-clamp-2">{item.points} pontos</p>
                <p className="text-[#898261] text-xs font-normal leading-normal line-clamp-2">{item.limit}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}); 