import React from 'react';
import { Calendar } from 'lucide-react';

interface Feira {
  id: string;
  nome: string;
  endereco: string;
  dataInicio: string;
  dataFim: string;
  espacosDisponiveis: number;
  valorMinimo: number;
}

interface FeirasFuturasSectionProps {
  feiras: Feira[];
  isLoading: boolean;
  formatPrice: (price: number) => string;
  onSelecionarFeira: (feira: Feira) => void;
}

export const FeirasFuturasSection: React.FC<FeirasFuturasSectionProps> = ({
  feiras,
  isLoading,
  formatPrice,
  onSelecionarFeira
}) => {
  if (isLoading) {
    return (
      <div>
        <h2 className="text-xl font-semibold text-modamix-dark mb-4">
          Feiras Futuras
        </h2>
        <div className="text-center py-8">
          <p className="text-gray-500">Carregando feiras futuras...</p>
        </div>
      </div>
    );
  }

  if (feiras.length === 0) {
    return (
      <div>
        <h2 className="text-xl font-semibold text-modamix-dark mb-4">
          Feiras Futuras
        </h2>
        <div className="text-center py-8">
          <p className="text-gray-500">Nenhuma feira futura encontrada.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-modamix-dark mb-4">
        Feiras Futuras
      </h2>
      <div className="space-y-4">
        {feiras.map((feira) => (
          <button
            key={feira.id}
            onClick={() => onSelecionarFeira(feira)}
            className="w-full bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200 text-left"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-modamix-orange rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-modamix-dark">{feira.nome}</h3>
                <p className="text-sm text-gray-600">{feira.endereco}</p>
                <p className="text-sm text-gray-500">
                  {feira.espacosDisponiveis} espaços - A partir de {formatPrice(feira.valorMinimo)}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}; 