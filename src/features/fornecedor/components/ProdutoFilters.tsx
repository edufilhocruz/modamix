/**
 * Componente de filtros e busca para produtos
 * Permite filtrar produtos por categoria e buscar por nome/descrição
 */

import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { Categoria } from '../types/fornecedor';

/**
 * Props para o componente ProdutoFilters
 */
interface ProdutoFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  categorias: Categoria[];
  onSearchChange: (term: string) => void;
  onCategoryChange: (category: string) => void;
  onCreateClick: () => void;
  totalProdutos: number;
  produtosAtivos: number;
}

/**
 * Componente de filtros para produtos
 */
export const ProdutoFilters: React.FC<ProdutoFiltersProps> = React.memo(({
  searchTerm,
  selectedCategory,
  categorias,
  onSearchChange,
  onCategoryChange,
  onCreateClick,
  totalProdutos,
  produtosAtivos
}) => {
  return (
    <div className="space-y-4">
      {/* Header com estatísticas */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-modamix-dark">
            Meus Produtos
          </h2>
          <p className="text-modamix-dark/70 text-sm">
            {totalProdutos} produtos • {produtosAtivos} ativos
          </p>
        </div>
        <button
          onClick={onCreateClick}
          className="flex items-center space-x-2 px-4 py-2 bg-modamix-orange text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          <Plus size={16} />
          <span>Novo Produto</span>
        </button>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="space-y-4">
          {/* Busca */}
          <div>
            <label className="block text-sm font-medium text-modamix-dark mb-2">
              Buscar Produtos
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar por nome ou descrição..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-modamix-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
              />
            </div>
          </div>

          {/* Filtro por categoria */}
          <div>
            <label className="block text-sm font-medium text-modamix-dark mb-2">
              Filtrar por Categoria
            </label>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-modamix-dark focus:outline-none focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
              >
                <option value="">Todas as categorias</option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.nome}>
                    {categoria.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Chips de filtros ativos */}
          {(searchTerm || selectedCategory) && (
            <div className="flex flex-wrap gap-2 pt-2">
              {searchTerm && (
                <div className="flex items-center space-x-1 bg-modamix-orange/10 text-modamix-orange px-3 py-1 rounded-full text-sm">
                  <span>Busca: "{searchTerm}"</span>
                  <button
                    onClick={() => onSearchChange('')}
                    className="ml-1 hover:bg-modamix-orange/20 rounded-full p-0.5"
                  >
                    <span className="text-xs">×</span>
                  </button>
                </div>
              )}
              {selectedCategory && (
                <div className="flex items-center space-x-1 bg-modamix-yellow/10 text-modamix-dark px-3 py-1 rounded-full text-sm">
                  <span>Categoria: {selectedCategory}</span>
                  <button
                    onClick={() => onCategoryChange('')}
                    className="ml-1 hover:bg-modamix-yellow/20 rounded-full p-0.5"
                  >
                    <span className="text-xs">×</span>
                  </button>
                </div>
              )}
              {(searchTerm || selectedCategory) && (
                <button
                  onClick={() => {
                    onSearchChange('');
                    onCategoryChange('');
                  }}
                  className="text-modamix-dark/70 hover:text-modamix-dark text-sm underline"
                >
                  Limpar filtros
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

ProdutoFilters.displayName = 'ProdutoFilters'; 