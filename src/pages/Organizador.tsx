import React from 'react';
import { Building2, Calendar, Users, BarChart3 } from 'lucide-react';

const Organizador = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-24">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-modamix-dark mb-2">
            Área do Organizador
          </h1>
          <p className="text-gray-600">
            Ofereça feiras para expositores
          </p>
        </div>

        {/* Cards de Ação */}
        <div className="space-y-4">
          {/* Criar Feiras */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Calendar className="w-8 h-8 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-modamix-dark mb-1">
                  Criar Feiras
                </h3>
                <p className="text-sm text-modamix-dark/70">
                  Organize novas feiras e eventos
                </p>
              </div>
            </div>
          </div>

          {/* Gerenciar Expositores */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-modamix-dark mb-1">
                  Gerenciar Expositores
                </h3>
                <p className="text-sm text-modamix-dark/70">
                  Aprove e gerencie expositores
                </p>
              </div>
            </div>
          </div>

          {/* Relatórios */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <BarChart3 className="w-8 h-8 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-modamix-dark mb-1">
                  Relatórios
                </h3>
                <p className="text-sm text-modamix-dark/70">
                  Acompanhe o desempenho das feiras
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mensagem de Desenvolvimento */}
        <div className="mt-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <Building2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h3 className="font-semibold text-modamix-dark mb-1">
              Em Desenvolvimento
            </h3>
            <p className="text-sm text-modamix-dark/70">
              Sistema de organizador será implementado em breve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizador; 