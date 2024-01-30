import type { IProduct } from '~/types/types'
import { ToastAction } from 'radix-vue'
import { useToast } from '~/components/ui/toast'
const { toast } = useToast()

export const removeCartProductPopup = (card: IProduct): void => {
  toast({
    description: 'Товар удалён из корзины',
    variant: 'destructive',
    action: h(
      ToastAction,
      {
        altText: 'Отменить',
        onClick: () => (addToCart(card)),
      },
      {
        default: () => 'Отменить',
      },
    ),
  })
}

export const addCartProductPopup = (card: IProduct): void => {
  toast({
    description: 'Товар добавлен в корзину',
    action: h(
      ToastAction,
      {
        altText: 'Отменить',
        onClick: () => (removeFromCart(card)),
      },
      {
        default: () => 'Отменить',
      },
    ),
  })
}