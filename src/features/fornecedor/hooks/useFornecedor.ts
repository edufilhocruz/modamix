import { useState, useCallback } from 'react';
import { FormDataFeira, CreateFeiraRequest, MetodosPagamento } from '../types/fornecedor';
import { FornecedorService } from '../services/fornecedorService';

/**
 * Hook customizado para gerenciar o estado e lógica da feature Fornecedor
 * Centraliza toda a lógica de estado e operações do formulário
 */
export const useFornecedor = () => {
  const [formData, setFormData] = useState<FormDataFeira>({
    nomeFeira: '',
    numeroBarracas: '',
    precoBarraca: '',
    metodosPagamento: {
      dinheiro: false,
      credito: false,
      debito: false,
      pix: false
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  /**
   * Atualiza um campo específico do formulário
   * @param field - Nome do campo a ser atualizado
   * @param value - Novo valor do campo
   */
  const handleInputChange = useCallback((field: keyof FormDataFeira, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Limpa erro quando usuário começa a digitar
    if (error) setError(null);
  }, [error]);

  /**
   * Atualiza o estado de um método de pagamento
   * @param method - Nome do método de pagamento
   */
  const handleCheckboxChange = useCallback((method: keyof MetodosPagamento) => {
    setFormData(prev => ({
      ...prev,
      metodosPagamento: {
        ...prev.metodosPagamento,
        [method]: !prev.metodosPagamento[method]
      }
    }));
    // Limpa erro quando usuário seleciona método de pagamento
    if (error) setError(null);
  }, [error]);

  /**
   * Submete o formulário para criar uma nova feira
   * @returns Promise com resultado da operação
   */
  const handleSubmit = useCallback(async (): Promise<boolean> => {
    try {
      setIsLoading(true);
      setError(null);

      // Prepara dados para envio
      const requestData: CreateFeiraRequest = {
        nomeFeira: formData.nomeFeira,
        numeroBarracas: parseInt(formData.numeroBarracas) || 0,
        precoBarraca: FornecedorService.parsePriceToCents(formData.precoBarraca),
        metodosPagamento: formData.metodosPagamento
      };

      // Log para debug
      console.log('Dados do formulário:', formData);
      console.log('Dados para envio:', requestData);

      // Valida dados antes do envio
      if (!FornecedorService.validateFormData(requestData)) {
        setError('Por favor, preencha todos os campos obrigatórios e selecione pelo menos um método de pagamento.');
        return false;
      }

      // Chama serviço para criar feira
      const response = await FornecedorService.createFeira(requestData);
      
      if (response.status === 'success') {
        // Limpa formulário após sucesso
        setFormData({
          nomeFeira: '',
          numeroBarracas: '',
          precoBarraca: '',
          metodosPagamento: {
            dinheiro: false,
            credito: false,
            debito: false,
            pix: false
          }
        });
        return true;
      } else {
        setError(response.message);
        return false;
      }
    } catch (err) {
      console.error('Erro no hook useFornecedor:', err);
      setError(err instanceof Error ? err.message : 'Erro inesperado. Tente novamente.');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [formData]);

  /**
   * Reseta o formulário para estado inicial
   */
  const resetForm = useCallback(() => {
    setFormData({
      nomeFeira: '',
      numeroBarracas: '',
      precoBarraca: '',
      metodosPagamento: {
        dinheiro: false,
        credito: false,
        debito: false,
        pix: false
      }
    });
    setError(null);
  }, []);

  /**
   * Altera a seção ativa na navegação
   * @param section - Nome da seção para ativar
   */
  const handleSectionChange = useCallback((section: string) => {
    setActiveSection(section);
  }, []);

  return {
    formData,
    isLoading,
    error,
    activeSection,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    resetForm,
    handleSectionChange
  };
}; 