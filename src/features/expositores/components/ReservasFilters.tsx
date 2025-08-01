import React from 'react';
import { Search, Filter, Calendar } from 'lucide-react';

interface ReservasFiltersProps {
  searchTerm: string;
  selectedStatus: string;
  selectedDate: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (status: string) => void;
  onDateChange: (date: string) => void;
  onClearFilters: () => void;
}

const statusOptions = [
  { value: '', label: 'Todos os Status' },
  { value: 'pendente', label: 'Pendente' },
  { value: 'confirmada', label: 'Confirmada' },
  { value: 'em_analise', label: 'Em Análise' },
  { value: 'cancelada', label: 'Cancelada' }
];

export const ReservasFilters: React.FC<ReservasFiltersProps> = React.memo(({
  searchTerm,
  selectedStatus,
  selectedDate,
  onSearchChange,
  onStatusChange,
  onDateChange,
  onClearFilters
}) => {
  const hasFilters = searchTerm || selectedStatus || selectedDate;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Busca */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por feira ou espaço..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm text-modamix-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-modamix-orange focus:border-transparent focus:bg-white transition-all duration-200"
          />
        </div>

        {/* Filtro por Status */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full pl-10 pr-8 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm text-modamix-dark focus:outline-none focus:ring-2 focus:ring-modamix-orange focus:border-transparent focus:bg-white transition-all duration-200 appearance-none"
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro por Data */}
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm text-modamix-dark focus:outline-none focus:ring-2 focus:ring-modamix-orange focus:border-transparent focus:bg-white transition-all duration-200"
          />
        </div>
      </div>

      {/* Limpar Filtros */}
      {hasFilters && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClearFilters}
            className="px-4 py-2 text-sm text-gray-600 hover:text-modamix-orange transition-colors"
          >
            Limpar Filtros
          </button>
        </div>
      )}
    </div>
  );
});

ReservasFilters.displayName = 'ReservasFilters'; 