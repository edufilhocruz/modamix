import React from 'react';
import { Search, X } from 'lucide-react';

interface SimpleSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onClearSearch: () => void;
  placeholder?: string;
}

export const SimpleSearch: React.FC<SimpleSearchProps> = React.memo(({
  searchTerm,
  onSearchChange,
  onClearSearch,
  placeholder = "Buscar produtos..."
}) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm text-modamix-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-modamix-orange focus:border-transparent focus:bg-white transition-all duration-200"
      />
      {searchTerm && (
        <button
          onClick={onClearSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
});

SimpleSearch.displayName = 'SimpleSearch'; 