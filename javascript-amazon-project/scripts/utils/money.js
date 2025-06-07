export function formatCurrency(priceCents) {
  return priceCents ? `$${(priceCents / 100).toFixed(2)}` : '$0.00';
}