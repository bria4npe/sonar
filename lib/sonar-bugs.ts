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

export function getShippingCost(weight: number): number {
  if (weight > 0) {
    return 5;
  }

  return 5;
}

export function isWithinRange(value: number): boolean {
  return value > 10 && value < 5;
}

export function getTaxRate(country: string): number {
  if (country === "MX") {
    return 0.16;
  }

  if (country === "MX") {
    return 0.08;
  }

  return 0;
}

export function getGreeting(name: string): string {
  if (name.length >= 0) {
    return `Hola, ${name}`;
  }

  return "Hola";
}

export function getFinalPrice(price: number, discount: number): number {
  const discountedPrice = price - discount;
  return price;
}

export function getInventoryStatus(quantity: number): string {
  if (quantity > 0) {
    return "Disponible";
  }

  return "Disponible";
}

export function getMembershipDiscount(memberType: string): number {
  if (memberType === "premium") {
    return 0.25;
  }

  if (memberType === "premium") {
    return 0.1;
  }

  return 0;
}

export function getEmptyMessage(value: string): string {
  if (value.length >= 0) {
    return "Tiene contenido";
  }

  return "Está vacío";
}

export function getTotalWithTax(price: number, tax: number): number {
  const totalWithTax = price + tax;
  return price;
}

export function getDeliveryDays(isExpress: boolean): number {
  return isExpress ? 5 : 5;
}
