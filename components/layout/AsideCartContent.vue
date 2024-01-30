<script setup lang="ts">
import type { IProduct } from '~/types/types'
import { formattedPrice } from '../../utils/formattedPrice'

const productsStore = useProductsStore()
const cartStore = useCartStore()
const addedProducts = computed<IProduct[] | null>(
  () => productsStore.get && productsStore.get.filter((el) => el.isAdded),
)
</script>

<template>
  <div class="flex flex-grow flex-col justify-between gap-10 overflow-auto">
    <div class="flex flex-grow flex-col gap-3 overflow-auto">
      <LayoutAsideCartProduct
        v-if="addedProducts"
        v-for="card in addedProducts"
        :key="card.id"
        :card="card"
        @delete="productsStore.remove(card)" />
    </div>

    <div class="flex flex-col gap-4 text-xl">
      <div class="flex gap-2">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed"></div>

        <b>{{ formattedPrice(cartStore.get) }}</b>
      </div>
      <div class="flex gap-2">
        <span>Налог 5%:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{formattedPrice(cartStore.get * 1.05)}}</b>
      </div>
      <button
        :disabled="!addedProducts?.length"
        class="mt-4 cursor-pointer rounded-xl bg-lime-500 py-3 text-white transition hover:bg-lime-600 active:bg-lime-700 disabled:bg-slate-300">
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<style scoped></style>
