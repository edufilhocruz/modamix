import React from "react";
import { Card } from "../ui/Card";
import { useBeneficios } from "../hooks/useBeneficios";

/**
 * Lista de benefícios para fornecedores, exibidos como cards.
 * Usa dados do hook de benefícios.
 */
export const SupplierBenefits = React.memo(() => {
  const { extras } = useBeneficios();
  const items = extras("fornecedor");
  return (
    <div className="my-4">
      <h2 className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-1 pb-3 pt-5">Benefícios para Fornecedores</h2>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <Card key={item.title} className="flex items-center gap-4 bg-white px-4 min-h-[56px] py-2">
            <div className="flex flex-col">
              <span className="text-[#181711] text-base font-bold mb-1">{item.title}</span>
              <span className="text-[#898261] text-sm font-normal leading-snug">{item.desc}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}); 