import React from 'react';
import { Search, Filter, X, SortAsc } from 'lucide-react';
import { FiltrosProdutos } from '../types/expositores';

interface ProdutoFiltersProps {
  filtros: FiltrosProdutos;
  categorias: string[];
  fornecedores: Array<{ id: string; nome: string }>;
  onFiltrosChange: (filtros: Partial<FiltrosProdutos>) => void;
  onClearFiltros: () => void;
}

export const ProdutoFilters: React.FC<ProdutoFiltersProps> = React.memo(({
  filtros,
  categorias,
  fornecedores,
  onFiltrosChange,
  onClearFiltros
}) => {
  const [showAdvancedFilters, setShowAdvancedFilters] = React.useState(false);

  const handleInputChange = (field: keyof FiltrosProdutos, value: string | number) => {
    onFiltrosChange({ [field]: value });
  };

  const hasActiveFilters = filtros.busca || filtros.categoria || filtros.fornecedor || filtros.precoMin > 0 || filtros.precoMax > 0;

  return (
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
              value={filtros.busca}
              onChange={(e) => handleInputChange('busca', e.target.value)}
              placeholder="Buscar por nome ou descrição..."
              className="w-full pl-12 pr-4 py-4 border-0 rounded-xl bg-gray-50 text-modamix-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-modamix-orange focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        {/* Filtros básicos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Categoria */}
          <div>
            <label className="block text-sm font-medium text-modamix-dark mb-3">
              Categoria
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleInputChange('categoria', '')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filtros.categoria === ''
                    ? 'bg-modamix-orange text-white shadow-md'
                    : 'bg-gray-100 text-modamix-dark hover:bg-gray-200'
                }`}
              >
                Todas
              </button>
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => handleInputChange('categoria', categoria)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filtros.categoria === categoria
                      ? 'bg-modamix-orange text-white shadow-md'
                      : 'bg-gray-100 text-modamix-dark hover:bg-gray-200'
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>

          {/* Fornecedor */}
          <div>
            <label className="block text-sm font-medium text-modamix-dark mb-3">
              Fornecedor
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleInputChange('fornecedor', '')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filtros.fornecedor === ''
                    ? 'bg-modamix-orange text-white shadow-md'
                    : 'bg-gray-100 text-modamix-dark hover:bg-gray-200'
                }`}
              >
                Todos
              </button>
              {fornecedores.map((fornecedor) => (
                <button
                  key={fornecedor.id}
                  onClick={() => handleInputChange('fornecedor', fornecedor.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filtros.fornecedor === fornecedor.id
                      ? 'bg-modamix-orange text-white shadow-md'
                      : 'bg-gray-100 text-modamix-dark hover:bg-gray-200'
                  }`}
                >
                  {fornecedor.nome}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Botão para filtros avançados */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="flex items-center space-x-2 text-modamix-dark hover:text-modamix-orange transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">
              {showAdvancedFilters ? 'Ocultar' : 'Mostrar'} filtros avançados
            </span>
          </button>

          {hasActiveFilters && (
            <button
              onClick={onClearFiltros}
              className="flex items-center space-x-1 text-modamix-orange hover:text-orange-600 text-sm font-medium transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Limpar filtros</span>
            </button>
          )}
        </div>

        {/* Filtros avançados */}
        {showAdvancedFilters && (
          <div className="border-t border-gray-100 pt-4 space-y-4">
            {/* Faixa de preço */}
            <div>
              <label className="block text-sm font-medium text-modamix-dark mb-3">
                Faixa de Preço
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="number"
                    value={filtros.precoMin || ''}
                    onChange={(e) => handleInputChange('precoMin', Number(e.target.value) || 0)}
                    placeholder="Mínimo"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-modamix-dark focus:outline-none focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    value={filtros.precoMax || ''}
                    onChange={(e) => handleInputChange('precoMax', Number(e.target.value) || 0)}
                    placeholder="Máximo"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-modamix-dark focus:outline-none focus:ring-2 focus:ring-modamix-orange focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Ordenação */}
            <div>
              <label className="block text-sm font-medium text-modamix-dark mb-3">
                Ordenar por
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'recentes', label: 'Mais Recentes' },
                  { value: 'nome', label: 'Nome A-Z' },
                  { value: 'preco', label: 'Menor Preço' },
                  { value: 'avaliacao', label: 'Melhor Avaliação' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleInputChange('ordenacao', option.value as any)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      filtros.ordenacao === option.value
                        ? 'bg-modamix-orange text-white shadow-md'
                        : 'bg-gray-100 text-modamix-dark hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Chips de filtros ativos */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
            <span className="text-sm text-modamix-dark/60">Filtros ativos:</span>
            
            {filtros.busca && (
              <div className="flex items-center space-x-2 bg-modamix-orange/10 text-modamix-orange px-4 py-2 rounded-full text-sm font-medium">
                <span>Busca: "{filtros.busca}"</span>
                <button
                  onClick={() => handleInputChange('busca', '')}
                  className="hover:bg-modamix-orange/20 rounded-full p-1 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            
            {filtros.categoria && (
              <div className="flex items-center space-x-2 bg-modamix-yellow/10 text-modamix-dark px-4 py-2 rounded-full text-sm font-medium">
                <span>Categoria: {filtros.categoria}</span>
                <button
                  onClick={() => handleInputChange('categoria', '')}
                  className="hover:bg-modamix-yellow/20 rounded-full p-1 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            
            {filtros.fornecedor && (
              <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <span>Fornecedor: {fornecedores.find(f => f.id === filtros.fornecedor)?.nome}</span>
                <button
                  onClick={() => handleInputChange('fornecedor', '')}
                  className="hover:bg-blue-100 rounded-full p-1 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            
            {(filtros.precoMin > 0 || filtros.precoMax > 0) && (
              <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <span>
                  Preço: R$ {filtros.precoMin || 0} - R$ {filtros.precoMax || '∞'}
                </span>
                <button
                  onClick={() => {
                    handleInputChange('precoMin', 0);
                    handleInputChange('precoMax', 0);
                  }}
                  className="hover:bg-green-100 rounded-full p-1 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
});

ProdutoFilters.displayName = 'ProdutoFilters'; 