import React from "react";
import { levels } from "@/data/beneficiosData";
import { Card } from "@/ui/Card";
import { Award, Gem } from "lucide-react";

const medalColors = [
  "#b08d57", // Bronze
  "#c0c0c0", // Prata
  "#ffd700", // Ouro
  "#4fd1c5"  // Diamante (usando azul para destacar)
];

export const LevelsSection = () => (
  <div className="my-4">
    <h2 className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-1 pb-3 pt-5">Níveis de Fidelidade</h2>
    <div className="flex flex-col gap-3">
      {levels.map((item, i) => (
        <Card key={i} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div className="flex items-center justify-center rounded-full shrink-0 size-12" style={{ background: '#f4f4f0' }}>
            {item.name === "Diamante" ? (
              <Gem size={28} color={medalColors[i]} fill={medalColors[i]} />
            ) : (
              <Award size={28} color={medalColors[i]} fill={medalColors[i]} />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-[#181711] text-lg font-bold mb-1">{item.name}</span>
            <span className="text-[#898261] text-base font-normal mb-1">{item.range}</span>
            <span className="text-[#898261] text-base font-normal leading-snug">Benefícios: {item.benefits}</span>
          </div>
        </Card>
      ))}
    </div>
  </div>
); 