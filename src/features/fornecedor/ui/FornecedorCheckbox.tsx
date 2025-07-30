import React from 'react';

/**
 * Props para o componente FornecedorCheckbox
 */
interface FornecedorCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

/**
 * Componente UI reutilizável para checkboxes do formulário do fornecedor
 * Segue o design system estabelecido no Figma
 */
export const FornecedorCheckbox: React.FC<FornecedorCheckboxProps> = React.memo(({
  label,
  checked,
  onChange
}) => {
  return (
    <label className="flex gap-x-3 py-3 flex-row cursor-pointer">
      <input
        type="checkbox"
        className="h-5 w-5 rounded border-[#e8e6ce] border-2 bg-transparent text-[#eedb0b] checked:bg-[#eedb0b] checked:border-[#eedb0b] focus:ring-0 focus:ring-offset-0 focus:border-[#e8e6ce] focus:outline-none"
        checked={checked}
        onChange={onChange}
      />
      <p className="text-[#1c1b0d] text-base font-normal leading-normal select-none">
        {label}
      </p>
    </label>
  );
});

FornecedorCheckbox.displayName = 'FornecedorCheckbox'; 