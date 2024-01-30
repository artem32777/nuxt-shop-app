export const formattedPrice = (price: number): string => {
  return Math.round(price).toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  })
}