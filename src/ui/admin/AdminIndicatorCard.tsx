import React, { useEffect, useState } from "react";

// Card visual para exibir um indicador do painel admin
// Usar React.memo para evitar renders desnecessários
export const AdminIndicatorCard = React.memo(({ label, value, cardClass = "bg-modamix-yellow text-modamix-dark" }: { label: string; value: string | number; cardClass?: string }) => {
  const isNumber = typeof value === 'number';
  const [displayValue, setDisplayValue] = useState(isNumber ? 0 : value);

  useEffect(() => {
    if (!isNumber) return setDisplayValue(value);
    const start = 0;
    const end = value as number;
    if (start === end) return;
    const duration = 1200; // ms
    const frameRate = 30; // fps
    const totalFrames = Math.round(duration / (1000 / frameRate));
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      setDisplayValue(Math.round(progress * end));
      if (progress === 1) clearInterval(counter);
    }, 1000 / frameRate);
    return () => clearInterval(counter);
  }, [value, isNumber]);

  // Formatação: moeda para Receita, milhar para outros
  function formatValue(val: string | number) {
    if (label === 'Receita' && typeof val === 'number') {
      return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    if (typeof val === 'number') {
      return val.toLocaleString('pt-BR');
    }
    return val;
  }

  return (
    <div className={`flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 ${cardClass}`}>
      <p className="text-base font-medium leading-normal">{label}</p>
      <p className="tracking-light text-2xl font-bold leading-tight">{formatValue(displayValue)}</p>
    </div>
  );
}); 