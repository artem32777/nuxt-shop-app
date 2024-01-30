import type { IProduct } from '~/types/types'
import { addCartProductPopup, removeCartProductPopup } from '~/utils/showPopups'
import { useCartStore } from '~/stores/cart.store'


export const addToCart = (card: IProduct): void => {
  const cartStore = useCartStore()

  if (!card.isAdded) {
    card.isAdded = true
    cartStore.add(card)
    addCartProductPopup(card)
  }
}

export const removeFromCart = (card: IProduct): void => {
  const cartStore = useCartStore()

  if (card.isAdded) {
    card.isAdded = false
    cartStore.remove(card)
    removeCartProductPopup(card)
  }
}

export const toggleCartProduct =(card: IProduct): void => {
  const cartStore = useCartStore()

  if (!card.isAdded) {
    card.isAdded = true
    cartStore.add(card)
    addCartProductPopup(card)
  } else {
    card.isAdded = false
    cartStore.remove(card)
    removeCartProductPopup(card)
  }
}