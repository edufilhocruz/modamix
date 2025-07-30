import React from 'react';
import { FornecedorForm } from './FornecedorForm';
import { FormDataFeira, MetodosPagamento } from '../types/fornecedor';

/**
 * Props para o componente FornecedorContent
 */
interface FornecedorContentProps {
  activeSection: string;
  formData: FormDataFeira;
  onInputChange: (field: keyof FormDataFeira, value: string) => void;
  onCheckboxChange: (method: keyof MetodosPagamento) => void;
}

/**
 * Componente que renderiza o conteúdo baseado na seção ativa
 */
export const FornecedorContent: React.FC<FornecedorContentProps> = React.memo(({
  activeSection,
  formData,
  onInputChange,
  onCheckboxChange
}) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <div className="flex-1 p-4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-modamix-dark mb-2">
                Bem-vindo, ModaMix Ltda
              </h2>
              <p className="text-modamix-dark/80">
                Gerencie suas feiras e produtos de forma simples e eficiente.
              </p>
            </div>

            {/* Indicadores das Feiras */}
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-modamix-dark">
                Suas Feiras
              </h3>
              
              {/* Feira Ativa */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-modamix-dark">
                    Feira de Verão 2024
                  </h4>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                    Ativa
                  </span>
                </div>
                <div className="space-y-2 text-sm text-modamix-dark/70">
                  <p>• Local: Shopping Center</p>
                  <p>• Data: 15/01/2024 - 30/01/2024</p>
                  <p>• Barracas: 25/30 ocupadas</p>
                  <p>• Receita: R$ 12.500,00</p>
                </div>
              </div>

              {/* Próxima Feira */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-modamix-dark">
                    Feira de Inverno 2024
                  </h4>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    Agendada
                  </span>
                </div>
                <div className="space-y-2 text-sm text-modamix-dark/70">
                  <p>• Local: Parque Central</p>
                  <p>• Data: 01/07/2024 - 15/07/2024</p>
                  <p>• Barracas: 0/40 ocupadas</p>
                  <p>• Preço: R$ 80,00 por barraca</p>
                </div>
              </div>
            </div>

            {/* Resumo Geral */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold text-modamix-dark mb-3">
                Resumo Geral
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-modamix-orange">2</p>
                  <p className="text-xs text-modamix-dark/70">Feiras Criadas</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-modamix-orange">25</p>
                  <p className="text-xs text-modamix-dark/70">Barracas Alugadas</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-modamix-orange">R$ 12.500</p>
                  <p className="text-xs text-modamix-dark/70">Receita Total</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-modamix-orange">85%</p>
                  <p className="text-xs text-modamix-dark/70">Taxa de Ocupação</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'feiras':
        return (
          <div className="flex-1 p-4">
            <h2 className="text-2xl font-bold text-modamix-dark mb-4">
              Minhas Feiras
            </h2>
            <FornecedorForm
              formData={formData}
              onInputChange={onInputChange}
              onCheckboxChange={onCheckboxChange}
            />
          </div>
        );

      case 'relatorios':
        return (
          <div className="flex-1 p-4">
            <h2 className="text-2xl font-bold text-modamix-dark mb-4">
              Relatórios
            </h2>
            
            {/* Relatório de Vendas */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
              <h3 className="font-semibold text-modamix-dark mb-3">
                Relatório de Vendas - Janeiro 2024
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-modamix-dark/70">Total de Vendas</span>
                  <span className="font-semibold text-modamix-dark">R$ 12.500,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-modamix-dark/70">Barracas Alugadas</span>
                  <span className="font-semibold text-modamix-dark">25/30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-modamix-dark/70">Taxa de Ocupação</span>
                  <span className="font-semibold text-modamix-dark">83,3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-modamix-dark/70">Média por Barraca</span>
                  <span className="font-semibold text-modamix-dark">R$ 500,00</span>
                </div>
              </div>
            </div>

            {/* Relatório de Performance */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
              <h3 className="font-semibold text-modamix-dark mb-3">
                Performance das Feiras
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-modamix-dark/70">Feira de Verão 2024</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                    Excelente
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-modamix-dark/70">Taxa de Satisfação</span>
                  <span className="font-semibold text-modamix-dark">4.8/5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-modamix-dark/70">Reclamações</span>
                  <span className="font-semibold text-modamix-dark">2</span>
                </div>
              </div>
            </div>

            {/* Gráfico de Tendências */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold text-modamix-dark mb-3">
                Tendências dos Últimos 6 Meses
              </h3>
              <div className="space-y-2 text-sm text-modamix-dark/70">
                <div className="flex justify-between items-center">
                  <span>Julho 2023</span>
                  <span className="font-medium">R$ 8.200,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Agosto 2023</span>
                  <span className="font-medium">R$ 9.500,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Setembro 2023</span>
                  <span className="font-medium">R$ 11.300,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Outubro 2023</span>
                  <span className="font-medium">R$ 10.800,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Novembro 2023</span>
                  <span className="font-medium">R$ 11.900,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Dezembro 2023</span>
                  <span className="font-medium">R$ 12.500,00</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'perfil':
        return (
          <div className="flex-1 p-4">
            <h2 className="text-2xl font-bold text-modamix-dark mb-4">
              Meu Perfil
            </h2>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-modamix-dark mb-1">
                    Nome da Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50"
                    placeholder="Digite o nome da sua empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-modamix-dark mb-1">
                    CNPJ
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50"
                    placeholder="00.000.000/0000-00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-modamix-dark mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex-1 p-4">
            <p className="text-modamix-dark/70 text-center py-8">
              Seção não encontrada.
            </p>
          </div>
        );
    }
  };

  return (
    <main className="flex-1 overflow-y-auto">
      {renderContent()}
    </main>
  );
});

FornecedorContent.displayName = 'FornecedorContent'; 