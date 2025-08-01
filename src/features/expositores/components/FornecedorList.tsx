import React from 'react';
import { Star, MapPin, Package, Phone, Mail } from 'lucide-react';
import { Fornecedor } from '../types/expositores';

interface FornecedorListProps {
  fornecedores: Fornecedor[];
  selectedFornecedor: Fornecedor | null;
  isLoading: boolean;
  onSelectFornecedor: (fornecedor: Fornecedor) => void;
}

export const FornecedorList: React.FC<FornecedorListProps> = React.memo(({
  fornecedores,
  selectedFornecedor,
  isLoading,
  onSelectFornecedor
}) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 animate-pulse">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (fornecedores.length === 0) {
    return (
      <div className="text-center py-8">
        <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum fornecedor encontrado</h3>
        <p className="text-gray-500">Não há fornecedores disponíveis no momento.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {fornecedores.map((fornecedor) => (
        <div
          key={fornecedor.id}
          onClick={() => onSelectFornecedor(fornecedor)}
          className={`bg-white rounded-xl p-4 shadow-sm border transition-all duration-200 cursor-pointer hover:shadow-md ${
            selectedFornecedor?.id === fornecedor.id
              ? 'border-modamix-orange bg-orange-50'
              : 'border-gray-100 hover:border-gray-200'
          }`}
        >
          <div className="flex items-start space-x-4">
            {/* Logo do fornecedor */}
            <div className="flex-shrink-0">
              {fornecedor.logo ? (
                <img
                  src={fornecedor.logo}
                  alt={fornecedor.nome}
                  className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                />
              ) : (
                <div className="w-16 h-16 bg-gradient-to-br from-modamix-orange to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {fornecedor.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
              )}
            </div>

            {/* Informações do fornecedor */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-modamix-dark truncate">
                  {fornecedor.nome}
                </h3>
                <div className="flex items-center space-x-1 ml-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700">
                    {fornecedor.avaliacao.toFixed(1)}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {fornecedor.descricao}
              </p>

              {/* Tags e informações */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-modamix-orange/10 text-modamix-orange">
                  {fornecedor.categoria}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                  {fornecedor.totalProdutos} produtos
                </span>
              </div>

              {/* Localização e contato */}
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{fornecedor.localizacao}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-3 h-3" />
                  <span>{fornecedor.telefone}</span>
                </div>
              </div>
            </div>

            {/* Indicador de seleção */}
            {selectedFornecedor?.id === fornecedor.id && (
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-modamix-orange rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
});

FornecedorList.displayName = 'FornecedorList'; 