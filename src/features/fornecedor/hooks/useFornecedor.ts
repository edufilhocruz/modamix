/**
 * Hook para gerenciamento do fornecedor
 * Centraliza toda a lógica de estado e operações relacionadas ao fornecedor
 */

import { useState, useCallback } from 'react';
import { FormDataFeira, MetodosPagamento } from '../types/fornecedor';
import { fornecedorService } from '../services/fornecedorService';

/**
 * Estado inicial do formulário de feira
 */
const initialFormData: FormDataFeira = {
  nomeFeira: '',
  numeroBarracas: '',
  precoBarraca: '',
  metodosPagamento: {
    dinheiro: false,
    credito: false,
    debito: false,
    pix: false
  }
};

/**
 * Hook principal para gerenciamento do fornecedor
 */
export const useFornecedor = () => {
  // Estados principais
  const [formData, setFormData] = useState<FormDataFeira>(initialFormData);
  const [activeSection, setActiveSection] = useState<string>('inicio');
  
  // Estados de loading e erro
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Manipular mudanças no formulário
   */
  const handleInputChange = useCallback((field: keyof FormDataFeira, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  /**
   * Manipular mudanças nos checkboxes de métodos de pagamento
   */
  const handleCheckboxChange = useCallback((method: keyof MetodosPagamento) => {
    setFormData(prev => ({
      ...prev,
      metodosPagamento: {
        ...prev.metodosPagamento,
        [method]: !prev.metodosPagamento[method]
      }
    }));
  }, []);

  /**
   * Resetar formulário
   */
  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setError(null);
  }, []);

  /**
   * Submeter formulário
   */
  const handleSubmit = useCallback(async () => {
    try {
      // Validação
      const errors = fornecedorService.validateFormData(formData);
      if (errors.length > 0) {
        setError(errors.join(', '));
        return;
      }

      setIsLoading(true);
      setError(null);

      const requestData = {
        nomeFeira: formData.nomeFeira.trim(),
        numeroBarracas: parseInt(formData.numeroBarracas),
        precoBarraca: fornecedorService.parsePriceToCents(formData.precoBarraca),
        metodosPagamento: formData.metodosPagamento
      };

      const response = await fornecedorService.createFeira(requestData);

      if (response.status === 'success') {
        resetForm();
        return { success: true, message: response.message };
      } else {
        setError(response.message);
        return { success: false, message: response.message };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao criar feira';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, [formData, resetForm]);

  /**
   * Mudar seção ativa
   */
  const handleSectionChange = useCallback((section: string) => {
    setActiveSection(section);
  }, []);

  return {
    // Estados
    formData,
    activeSection,
    isLoading,
    error,
    
    // Ações
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    resetForm,
    handleSectionChange
  };
}; 