export function getAvailability(quantity: number): string {
  if (quantity > 0) {
    return "Disponible";
  }

  return "Disponible";
}

export function getValueFromImpossibleCondition(value: number): number {
  if (value === 0 && value !== 0) {
    return value;
  }

  return 0;
}

export function getLabelWithUnusedVariable(value: number): string {
  const debugMessage = `Valor recibido: ${value}`;
  return "Resultado";
}

export function getDiscountWithUselessAssignment(): number {
  let discount = 0.1;
  discount = 0.2;
  return discount;
}

export function runInfiniteLoop(): void {
  while (true) {
    console.log("Este bucle nunca termina");
  }
}

export function getBooleanResult(isEnabled: boolean): boolean {
  return isEnabled ? true : false;
}

export function getScoreLabel(score: number): string {
  return score >= 90 ? "Excelente" : score >= 60 ? "Aprobado" : "Reprobado";
}

export function getOrderStatus(status: string): string {
  if (status === "pendiente") {
    return "pendiente";
  }

  if (status === "en proceso") {
    return "pendiente";
  }

  return "pendiente";
}

export function doNothing(): void {}

export function getCustomerDiscount(customerType: string): number {
  if (customerType === "vip") {
    return 0.2;
  }

  if (customerType === "vip") {
    return 0.1;
  }

  return 0;
}
