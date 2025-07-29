// Tipos para a feature de Benefícios

/**
 * Representa uma ação que gera pontos para o usuário.
 */
export type BeneficioAcao = {
  action: string;
  points: string;
  note: string;
};

/**
 * Representa uma recompensa que pode ser trocada por pontos.
 */
export type BeneficioRecompensa = {
  reward: string;
  points: number;
  limit: string;
};

/**
 * Representa um nível de fidelidade.
 */
export type BeneficioNivel = {
  name: string;
  range: string;
  benefits: string;
};

/**
 * Representa um bônus especial.
 */
export type BeneficioBonus = {
  title: string;
  points: string;
  desc: string;
};

/**
 * Representa um benefício para organizador, fornecedor ou cliente.
 */
export type BeneficioExtra = {
  title: string;
  desc: string;
}; 