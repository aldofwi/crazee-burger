import { findObjectById } from "./array"

export function formatPrice(priceToFormat) {
  let price = priceToFormat

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €"
  price = replaceFrenchCommaWithDot(price)

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}

export function replaceFrenchCommaWithDot(price) {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."))
  return price
}

export const calculateSumToPay = (basket, menu) => {

  return basket.reduce((total, basketProduct) => {
    const menuProduct = findObjectById(basketProduct.id, menu)
    if (isNaN(menuProduct.price))
      return total

    total += basketProduct.quantity * menuProduct.price
    return total
  }, 0)
}