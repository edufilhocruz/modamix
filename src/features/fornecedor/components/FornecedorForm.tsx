import React from 'react';
import { FornecedorInput } from '../ui/FornecedorInput';
import { FornecedorCheckbox } from '../ui/FornecedorCheckbox';
import { FormDataFeira, MetodosPagamento } from '../types/fornecedor';

/**
 * Props para o componente FornecedorForm
 */
interface FornecedorFormProps {
  formData: FormDataFeira;
  onInputChange: (field: keyof FormDataFeira, value: string) => void;
  onCheckboxChange: (method: keyof MetodosPagamento) => void;
}

/**
 * Componente para o formulário principal do fornecedor
 * Compõe todos os campos e seções do formulário
 */
export const FornecedorForm: React.FC<FornecedorFormProps> = React.memo(({
  formData,
  onInputChange,
  onCheckboxChange
}) => {
  return (
    <div>
      {/* Campos do formulário */}
      <FornecedorInput
        label="Nome da Feira"
        placeholder="Ex: Feira de Artesanato"
        value={formData.nomeFeira}
        onChange={(value) => onInputChange('nomeFeira', value)}
        required
      />

      <FornecedorInput
        label="Número de Barracas"
        placeholder="Ex: 20"
        value={formData.numeroBarracas}
        onChange={(value) => onInputChange('numeroBarracas', value)}
        type="number"
        required
      />

      <FornecedorInput
        label="Preço por Barraca"
        placeholder="Ex: R$ 50,00"
        value={formData.precoBarraca}
        onChange={(value) => onInputChange('precoBarraca', value)}
        type="currency"
        required
      />

      {/* Seção de Localização */}
      <h3 className="text-[#1c1b0d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Localização
      </h3>
      <div className="flex px-4 py-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAH5AOWlidLcF_Qosifc-Oz0iYUkIy--3qY_cnN7iIeBGYhkZJuQdvdSUVMhY3C66duB8Z4_stb6qT8SKzjbmSyEVj54qqbI5145qi8yzJRlurlteZz_Y-i7G-BS28Z6boGDr5Ta_29-dSKTsbkbpqxMuc6rpiPLFdcvJeAdemhhu04Wklc3yuSfYlNQ6pViKe_sxJA4UIosaEs2uc1I6yh0YV-asYWHPVjIxzfW_jhIWdmVenUtNegC74pdW6tweKh1mEnKFiY0n4")'
          }}
          role="img"
          aria-label="Mapa da localização da feira"
        />
      </div>

      {/* Seção de Métodos de Pagamento */}
      <h3 className="text-[#1c1b0d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Métodos de Pagamento Aceitos
      </h3>
      <div className="px-4">
        <FornecedorCheckbox
          label="Dinheiro"
          checked={formData.metodosPagamento.dinheiro}
          onChange={() => onCheckboxChange('dinheiro')}
        />
        <FornecedorCheckbox
          label="Cartão de Crédito"
          checked={formData.metodosPagamento.credito}
          onChange={() => onCheckboxChange('credito')}
        />
        <FornecedorCheckbox
          label="Cartão de Débito"
          checked={formData.metodosPagamento.debito}
          onChange={() => onCheckboxChange('debito')}
        />
        <FornecedorCheckbox
          label="Pix"
          checked={formData.metodosPagamento.pix}
          onChange={() => onCheckboxChange('pix')}
        />
      </div>
    </div>
  );
});

FornecedorForm.displayName = 'FornecedorForm'; 