import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Página principal da feature de Perfil.
 * Pronta para compor blocos e integrar com backend.
 */
const Perfil = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 max-w-sm mx-auto pb-24">
      {/* Adicione aqui os blocos de header, formulário, estatísticas, etc. */}
      <h1 className="text-2xl font-bold mb-4">Perfil do Usuário</h1>
      {/* Exemplo de bloco: <PerfilHeader /> <PerfilForm /> <PerfilStats /> */}
      <div className="text-gray-500 mb-8">Conteúdo do perfil em desenvolvimento...</div>
      <div className="space-y-3">
        <button
          className="w-full h-12 rounded-full bg-modamix-orange text-white text-base font-bold shadow-sm transition hover:bg-orange-600"
          onClick={() => navigate('/')}
        >
          Trocar Perfil
        </button>
        <button
          className="w-full h-12 rounded-full bg-modamix-yellow text-modamix-dark text-base font-bold shadow-sm transition hover:bg-yellow-500"
          onClick={() => navigate('/admin')}
        >
          Acessar Painel Administrativo
        </button>
      </div>
    </div>
  );
};

export default Perfil; 