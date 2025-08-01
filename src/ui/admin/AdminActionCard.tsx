import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Card visual para exibir uma ação rápida do painel admin
// Usar React.memo para evitar renders desnecessários
export const AdminActionCard = React.memo(({
  title, desc, icon, to
}: { title: string; desc: string; icon: React.ElementType; to?: string }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) navigate(to);
  };
  const Icon = icon;
  // Animação de entrada
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add("animate-fade-slide-in");
    }
  }, []);
  return (
    <div
      ref={ref}
      className="flex items-stretch justify-between gap-4 rounded-xl cursor-pointer transition-all duration-300 bg-modamix-yellow hover:shadow-lg hover:-translate-y-1 animate-fade-slide-in border border-orange-200"
      onClick={handleClick}
      style={{ willChange: 'transform, box-shadow' }}
    >
      <div className="flex flex-col gap-1 flex-[2_2_0px] p-4">
        <p className="text-modamix-dark text-base font-bold leading-tight">{title}</p>
        <p className="text-modamix-dark/70 text-sm font-normal leading-normal">{desc}</p>
      </div>
      <div className="flex-1 flex items-center justify-center bg-modamix-orange/20 rounded-r-xl">
        <Icon className="w-10 h-10 text-modamix-orange" />
      </div>
    </div>
  );
});

// Tailwind custom animation (adicione no tailwind.config se necessário):
// animate-fade-slide-in: { 'from': { opacity: 0, transform: 'translateY(16px)' }, 'to': { opacity: 1, transform: 'translateY(0)' } } 