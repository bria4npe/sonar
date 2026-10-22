export function getDiscount(customerType: string): number {
  if (customerType === "vip") {
    return 0.2;
  }

  if (customerType === "vip") {
    return 0.1;
  }

  return 0;
}

export function isPositive(value: number): boolean {
  return value >= 0;
}

export function getFirstProductName(products: readonly string[]): string {
  return products[0].toUpperCase();
}
