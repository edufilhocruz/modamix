import React from "react";
import { useUserLevel } from "@/hooks/useUserLevel";
import { usePoints } from "@/hooks/usePoints";
import { Badge } from "@/ui/Badge";

const LEVELS = [
  { name: "Bronze", min: 0, max: 4999 },
  { name: "Prata", min: 5000, max: 9999 },
  { name: "Ouro", min: 10000, max: 19999 },
  { name: "Diamante", min: 20000, max: Infinity },
];

export const UserProfileCard = () => {
  // Mock de dados
  const points = usePoints();
  const level = useUserLevel(points);
  const name = "Maria Silva";
  const avatarUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCrT1ahoQTA7p42DKK2_6CkuoQ77IiVBDo9e70XbedM-rrcPQmmYhgs6tPfglGl4B5M_yf34ViET5uc0D3x8-wxIa1HYkEHOKRSmCYI7ks42rIam2bldMucXgXEICBnuY-EQiB6D6rSeN3sgHO0RbOETY5jmmpkZdtktTnscM3U7S4RYR_yZZEH8WBGyBaA__ovqyYkRgJWGukPKrHz19Dr4sf_IB2JdKJp4SQhwZ8iHPW6N6lxxjYD4aUPIoFsZjpqnYTfts6ndDc";

  // Encontrar o próximo nível
  const currentLevelIdx = LEVELS.findIndex(l => l.name === level);
  const nextLevel = LEVELS[currentLevelIdx + 1];
  const min = LEVELS[currentLevelIdx].min;
  const max = nextLevel ? nextLevel.min : LEVELS[currentLevelIdx].max;
  const progress = Math.min(1, (points - min) / (max - min));
  const pointsToNext = nextLevel ? nextLevel.min - points : 0;

  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white mb-4">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 mb-2"
        style={{ backgroundImage: `url('${avatarUrl}')` }}
      />
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">{name}</p>
        <p className="text-[#898261] text-base font-normal leading-normal text-center">
          <Badge color="bg-yellow-500 text-white">Nível {level}</Badge>
        </p>
        <p className="text-[#898261] text-base font-normal leading-normal text-center">{points.toLocaleString()} pontos</p>
        {nextLevel && (
          <div className="w-full mt-2">
            <div className="flex justify-between text-xs text-[#898261] mb-1">
              <span>{level}</span>
              <span>{nextLevel.name}</span>
            </div>
            <div className="w-full h-2 bg-[#f4f4f0] rounded-full overflow-hidden">
              <div
                className="h-2 rounded-full bg-yellow-500 transition-all"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <div className="text-xs text-[#898261] text-center mt-1">
              Faltam <b>{pointsToNext.toLocaleString()}</b> pontos para o próximo nível
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 