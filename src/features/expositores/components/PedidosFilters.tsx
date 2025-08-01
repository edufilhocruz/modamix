import React from 'react';
import { Search, Filter } from 'lucide-react';

interface PedidosFiltersProps {
  searchTerm: string;
  selectedStatus: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (status: string) => void;
  onClearFilters: () => void;
}

const statusOptions = [
  { value: '', label: 'Todos os Status' },
  { value: 'pendente', label: 'Pendente' },
  { value: 'aprovado', label: 'Aprovado' },
  { value: 'em_preparo', label: 'Em Preparo' },
  { value: 'cancelado', label: 'Cancelado' }
];

export const PedidosFilters: React.FC<PedidosFiltersProps> = React.memo(({
  searchTerm,
  selectedStatus,
  onSearchChange,
  onStatusChange,
  onClearFilters
}) => {
  const hasFilters = searchTerm || selectedStatus;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
      <div className="flex items-center space-x-4">
        {/* Busca */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por número do pedido ou fornecedor..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm text-modamix-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-modamix-orange focus:border-transparent focus:bg-white transition-all duration-200"
          />
        </div>

        {/* Filtro por Status */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="pl-10 pr-8 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm text-modamix-dark focus:outline-none focus:ring-2 focus:ring-modamix-orange focus:border-transparent focus:bg-white transition-all duration-200 appearance-none"
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Limpar Filtros */}
        {hasFilters && (
          <button
            onClick={onClearFilters}
            className="px-4 py-2 text-sm text-gray-600 hover:text-modamix-orange transition-colors"
          >
            Limpar
          </button>
        )}
      </div>
    </div>
  );
});

PedidosFilters.displayName = 'PedidosFilters'; 