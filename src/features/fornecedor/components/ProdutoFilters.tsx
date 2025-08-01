/**
 * Componente de filtros e busca para produtos
 * Permite filtrar produtos por categoria e buscar por nome/descrição
 */

import React from 'react';
import { Search, Plus } from 'lucide-react';
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
          className="flex items-center space-x-2 px-6 py-3 bg-modamix-orange text-white rounded-xl hover:bg-orange-600 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <Plus size={18} />
          <span className="font-medium">Novo Produto</span>
        </button>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="space-y-4">
          {/* Busca */}
          <div>
            <label className="block text-sm font-medium text-modamix-dark mb-3">
              Buscar Produtos
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar por nome ou descrição..."
                className="w-full pl-12 pr-4 py-4 border-0 rounded-xl bg-gray-50 text-modamix-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-modamix-orange focus:bg-white transition-all duration-200"
              />
            </div>
          </div>

          {/* Filtro por categoria */}
          <div>
            <label className="block text-sm font-medium text-modamix-dark mb-3">
              Filtrar por Categoria
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onCategoryChange('')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === ''
                    ? 'bg-modamix-orange text-white shadow-md'
                    : 'bg-gray-100 text-modamix-dark hover:bg-gray-200'
                }`}
              >
                Todas
              </button>
              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  onClick={() => onCategoryChange(categoria.nome)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === categoria.nome
                      ? 'bg-modamix-orange text-white shadow-md'
                      : 'bg-gray-100 text-modamix-dark hover:bg-gray-200'
                  }`}
                >
                  {categoria.nome}
                </button>
              ))}
            </div>
          </div>

          {/* Chips de filtros ativos */}
          {(searchTerm || selectedCategory) && (
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
              <span className="text-sm text-modamix-dark/60">Filtros ativos:</span>
              {searchTerm && (
                <div className="flex items-center space-x-2 bg-modamix-orange/10 text-modamix-orange px-4 py-2 rounded-full text-sm font-medium">
                  <span>Busca: "{searchTerm}"</span>
                  <button
                    onClick={() => onSearchChange('')}
                    className="hover:bg-modamix-orange/20 rounded-full p-1 transition-colors"
                  >
                    <span className="text-xs font-bold">×</span>
                  </button>
                </div>
              )}
              {selectedCategory && (
                <div className="flex items-center space-x-2 bg-modamix-yellow/10 text-modamix-dark px-4 py-2 rounded-full text-sm font-medium">
                  <span>Categoria: {selectedCategory}</span>
                  <button
                    onClick={() => onCategoryChange('')}
                    className="hover:bg-modamix-yellow/20 rounded-full p-1 transition-colors"
                  >
                    <span className="text-xs font-bold">×</span>
                  </button>
                </div>
              )}
              <button
                onClick={() => {
                  onSearchChange('');
                  onCategoryChange('');
                }}
                className="text-modamix-orange hover:text-orange-600 text-sm font-medium underline transition-colors"
              >
                Limpar todos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

ProdutoFilters.displayName = 'ProdutoFilters'; 