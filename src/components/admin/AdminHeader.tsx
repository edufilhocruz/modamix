import React from "react";

// Header do painel admin: título centralizado, padding reduzido, cor preta
export const AdminHeader = React.memo(() => (
  <div className="flex items-center bg-white p-2 pb-1 justify-center">
    <h2 className="text-modamix-dark text-lg font-bold leading-tight tracking-[-0.015em] text-center">
      Painel de Administração
    </h2>
  </div>
)); 