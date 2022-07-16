export function isDeliveryFree(anOrder) {
  // let basePrice = anOrder.basePrice;
  return anOrder.basePrice > 1000;
}
