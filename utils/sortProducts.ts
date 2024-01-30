import { SORT_BY } from '~/constants/constants'
import type { IProduct } from '~/types/types'

export const sortProducts = (
  products: IProduct[],
  sortBy: SORT_BY,
): IProduct[] => {
  if (sortBy === SORT_BY.default) {
    return products
  }
  if (sortBy === SORT_BY.maxPrice) {
    return products.sort((el: IProduct, nextEl: IProduct) => el.price - nextEl.price)
  }
  if (sortBy === SORT_BY.minPrice) {
    return products.sort((el: IProduct, nextEl: IProduct) => nextEl.price - el.price)
  }
  return products
}
