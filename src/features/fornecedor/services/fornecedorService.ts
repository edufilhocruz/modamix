/**
 * Serviço para gerenciamento de feiras do fornecedor
 * Responsável por todas as operações relacionadas a feiras
 */

import { 
  FormDataFeira, 
  CreateFeiraRequest, 
  CreateFeiraResponse,
  MetodosPagamento 
} from '../types/fornecedor';

/**
 * Criar nova feira
 */
export const createFeira = async (data: CreateFeiraRequest): Promise<CreateFeiraResponse> => {
  try {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simular validação
    if (!data.nomeFeira || data.numeroBarracas <= 0 || data.precoBarraca <= 0) {
      throw new Error('Dados inválidos para criar feira');
    }

    // Simular criação bem-sucedida
    const novaFeira = {
      id: Date.now().toString(),
      nomeFeira: data.nomeFeira,
      numeroBarracas: data.numeroBarracas,
      precoBarraca: data.precoBarraca,
      metodosPagamento: data.metodosPagamento,
      status: 'ativa'
    };

    return {
      id: novaFeira.id,
      nomeFeira: novaFeira.nomeFeira,
      status: 'success',
      message: 'Feira criada com sucesso!'
    };
  } catch (error) {
    console.error('Erro ao criar feira:', error);
    return {
      id: '',
      nomeFeira: data.nomeFeira,
      status: 'error',
      message: error instanceof Error ? error.message : 'Falha ao criar feira'
    };
  }
};

/**
 * Validar dados do formulário
 */
export const validateFormData = (data: FormDataFeira): string[] => {
  const errors: string[] = [];

  if (!data.nomeFeira.trim()) {
    errors.push('Nome da feira é obrigatório');
  }

  if (!data.numeroBarracas || parseInt(data.numeroBarracas) <= 0) {
    errors.push('Número de barracas deve ser maior que zero');
  }

  if (!data.precoBarraca || parseFloat(data.precoBarraca.replace(/[^\d,]/g, '').replace(',', '.')) <= 0) {
    errors.push('Preço da barraca deve ser maior que zero');
  }

  // Verificar se pelo menos um método de pagamento foi selecionado
  const metodosSelecionados = Object.values(data.metodosPagamento).some(value => value);
  if (!metodosSelecionados) {
    errors.push('Selecione pelo menos um método de pagamento');
  }

  return errors;
};

/**
 * Formatar preço para exibição
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

/**
 * Converter preço de string para centavos
 */
export const parsePriceToCents = (priceString: string): number => {
  const cleanPrice = priceString.replace(/[^\d,]/g, '').replace(',', '.');
  return Math.round(parseFloat(cleanPrice) * 100);
};

/**
 * Buscar feiras do fornecedor
 */
export const getFeiras = async (fornecedorId: string) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock data
    return [
      {
        id: '1',
        nome: 'Feira de Verão 2024',
        dataInicio: '2024-01-15',
        dataFim: '2024-01-30',
        local: 'Shopping Center',
        barracasOcupadas: 25,
        barracasTotal: 30,
        precoBarraca: 50000, // em centavos
        status: 'ativa'
      },
      {
        id: '2',
        nome: 'Feira de Inverno 2024',
        dataInicio: '2024-07-01',
        dataFim: '2024-07-15',
        local: 'Parque Central',
        barracasOcupadas: 0,
        barracasTotal: 40,
        precoBarraca: 80000, // em centavos
        status: 'agendada'
      }
    ];
  } catch (error) {
    console.error('Erro ao buscar feiras:', error);
    throw new Error('Falha ao carregar feiras');
  }
};

// Exportar como objeto para compatibilidade
export const fornecedorService = {
  createFeira,
  validateFormData,
  formatPrice,
  parsePriceToCents,
  getFeiras
}; 