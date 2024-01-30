<script setup lang="ts">
import { SORT_BY } from '~/constants/constants'
import type { IProduct } from '~/types/types'

defineProps<{
  listTitle: string
  products: IProduct[] | null
}>()

const productsStore = useProductsStore()

const searchValue = ref<string>('')
const sortValue = ref<SORT_BY>(SORT_BY.default)

watch(sortValue, () => {
  productsStore.sort(sortValue.value)
})
</script>

<template>
  <div class="mb-10 flex justify-between">
    <h2 class="flex-grow text-3xl font-bold">{{listTitle}}</h2>
    <ProductSort
      @search-value="searchValue = $event"
      @sort-value="sortValue = $event" />
  </div>
  <div class="products-list">
    <ProductCard
      v-if="products"
      v-for="card in products"
      :key="card.id"
      :search-value="searchValue"
      :card="card" />
    <p v-else>No products</p>
  </div>
</template>

<style scoped></style>
