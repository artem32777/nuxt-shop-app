import type { IProduct } from '~/types/types'
import type { SORT_BY } from '~/constants/constants'
import { addToCart, removeFromCart, toggleCartProduct } from '~/utils/addToCart'
import { useCartStore } from '~/stores/cart.store'


export const useProductsStore = defineStore('products', () => {
  const products = ref<IProduct[] | null>(null)
  const get = computed<IProduct[] | null>(() => {
    return products.value
  })
  function set(data: IProduct[] | null): void {
    products.value = data
  }
  function sort(sortBy: SORT_BY): void {
    if (products.value) {
      products.value = sortProducts(products.value, sortBy)
    }
  }
  function add(card: IProduct): void{
    addToCart(card)
  }
  function remove(card: IProduct): void{
    removeFromCart(card)
  }
  function cartToggle(card: IProduct): void {
    toggleCartProduct(card)
  }
  function favoriteToggle(card: IProduct): void {
    card.isFavorite = !card.isFavorite
  }
  return {
    products,
    get,
    set,
    sort,
    add,
    remove,
    cartToggle,
    favoriteToggle,
  }
})
