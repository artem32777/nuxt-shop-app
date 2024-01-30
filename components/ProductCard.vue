<script setup lang="ts">
import type { IProduct } from '~/types/types'

const productsStore = useProductsStore()

const props = defineProps<{
  card: IProduct
  searchValue: string
}>()

const searchFilter = computed<boolean>(() => {
  if (props.searchValue === '') return true
  return props.card.title
    .toLowerCase()
    .includes(props.searchValue.toLowerCase().trim())
})
</script>

<template>
  <article
    v-show="searchFilter"
    class="relative h-full cursor-pointer rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-2 hover:shadow-xl">
    <button
      @click="productsStore.favoriteToggle(card)"
      class="absolute left-5 top-5 rounded-full bg-gray-50 p-3"
      title="Добавить в избранное">
      <img
        :src="card.isFavorite ? '/like-2.svg' : '/like-1.svg'"
        alt="Like 1" />
    </button>

    <img
      :src="card.imageUrl"
      alt="Sneaker"
      class="m-auto h-[200px] w-[200px]" />

    <p class="mt-2 min-h-[150px] text-lg">{{ card.title }}</p>

    <div class="mt-5 flex justify-between">
      <div class="flex flex-col text-lg">
        <span class="text-slate-400">Цена:</span>
        <b>{{ card.price }}</b>
      </div>

      <button
        @click="productsStore.cartToggle(card)"
        :title="card.isAdded ? 'Удалить' : 'Добавить'">
        <img
          :src="card.isAdded ? '/checked.svg' : '/plus.svg'"
          alt="add to cart" />
      </button>
    </div>
  </article>
</template>

<style scoped></style>
