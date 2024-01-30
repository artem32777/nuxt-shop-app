import type { IProduct } from '~/types/types'

export const useCartStore = defineStore('cart', ()=> {
  const cartSum = ref<number>(0)
  const get = computed(()=> cartSum.value)
  function add(product: IProduct):void{
    cartSum.value += product.price
  }
  function remove(product: IProduct):void{
    cartSum.value -= product.price
  }

  return {
    cartSum,
    get,
    add,
    remove
  }
})