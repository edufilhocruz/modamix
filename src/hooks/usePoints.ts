import { useState } from "react";

export function usePoints() {
  // Simulação: normalmente viria de API
  const [points] = useState(12500);
  return points;
} 