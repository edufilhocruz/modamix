import React from 'react';

/**
 * Props para o componente FornecedorInput
 */
interface FornecedorInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'number' | 'tel' | 'currency';
  required?: boolean;
}

/**
 * Componente UI reutilizável para inputs do formulário do fornecedor
 * Segue o design system estabelecido no Figma
 */
export const FornecedorInput: React.FC<FornecedorInputProps> = React.memo(({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = false
}) => {
  /**
   * Formata valor para moeda brasileira
   */
  const formatCurrency = (value: string): string => {
    // Remove tudo exceto números
    const numericValue = value.replace(/\D/g, '');
    
    if (numericValue === '') return '';
    
    // Converte para centavos e formata
    const cents = parseInt(numericValue);
    const reais = cents / 100;
    
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(reais);
  };

  /**
   * Trata mudança de valor baseado no tipo
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    if (type === 'currency') {
      // Para moeda, formata o valor
      const formattedValue = formatCurrency(newValue);
      onChange(formattedValue);
    } else {
      // Para outros tipos, passa o valor direto
      onChange(newValue);
    }
  };

  return (
    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
      <label className="flex flex-col min-w-40 flex-1">
        <p className="text-[#1c1b0d] text-base font-medium leading-normal pb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </p>
        <input
          type={type === 'currency' ? 'text' : type}
          placeholder={placeholder}
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1c1b0d] focus:outline-0 focus:ring-0 border-none bg-[#f4f3e7] focus:border-none h-14 placeholder:text-[#9c9549] p-4 text-base font-normal leading-normal"
          value={value}
          onChange={handleChange}
          required={required}
        />
      </label>
    </div>
  );
});

FornecedorInput.displayName = 'FornecedorInput'; 