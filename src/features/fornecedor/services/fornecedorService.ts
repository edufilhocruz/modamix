import { CreateFeiraRequest, CreateFeiraResponse } from '../types/fornecedor';

/**
 * Serviço para operações relacionadas ao Fornecedor
 * Centraliza toda a lógica de negócio e comunicação com APIs
 */
export class FornecedorService {
  private static readonly API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

  /**
   * Cria uma nova feira no sistema
   * @param data - Dados da feira a ser criada
   * @returns Promise com resposta da criação
   */
  static async createFeira(data: CreateFeiraRequest): Promise<CreateFeiraResponse> {
    try {
      // TODO: Substituir por chamada real da API quando backend estiver pronto
      // const response = await fetch(`${this.API_BASE_URL}/feiras`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      
      // Simulação de resposta da API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log para debug
      console.log('Criando feira:', data);
      
      return {
        id: `feira_${Date.now()}`,
        nomeFeira: data.nomeFeira,
        status: 'success',
        message: 'Feira criada com sucesso!'
      };
    } catch (error) {
      console.error('Erro ao criar feira:', error);
      throw new Error('Erro ao criar feira. Tente novamente.');
    }
  }

  /**
   * Valida os dados do formulário antes do envio
   * @param data - Dados do formulário
   * @returns true se válido, false caso contrário
   */
  static validateFormData(data: CreateFeiraRequest): boolean {
    if (!data.nomeFeira || !data.nomeFeira.trim()) return false;
    if (!data.numeroBarracas || data.numeroBarracas <= 0) return false;
    if (!data.precoBarraca || data.precoBarraca <= 0) return false;
    
    // Pelo menos um método de pagamento deve estar selecionado
    const hasPaymentMethod = Object.values(data.metodosPagamento).some(method => method);
    if (!hasPaymentMethod) return false;
    
    return true;
  }

  /**
   * Formata o preço para exibição
   * @param preco - Preço em centavos
   * @returns Preço formatado em reais
   */
  static formatPrice(preco: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco / 100);
  }

  /**
   * Converte string de preço para centavos
   * @param precoString - Preço como string (ex: "R$ 50,00")
   * @returns Preço em centavos
   */
  static parsePriceToCents(precoString: string): number {
    if (!precoString || precoString.trim() === '') return 0;
    
    // Remove símbolos de moeda e espaços
    const cleanPrice = precoString
      .replace(/[R$\s]/g, '') // Remove R$, espaços
      .replace(/\./g, '') // Remove pontos (separadores de milhares)
      .replace(',', '.'); // Substitui vírgula por ponto
    
    const parsedPrice = parseFloat(cleanPrice);
    
    return isNaN(parsedPrice) ? 0 : Math.round(parsedPrice * 100);
  }
} 