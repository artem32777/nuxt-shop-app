<script setup lang='ts'>
import type { IProduct } from '~/types/types'

defineProps<{
   card: IProduct
}>()

defineEmits<{
  (e: 'delete'): void
}>()

</script>

<template>
<article class='border p-4 rounded-2xl flex items-center gap-4'>
  <img
    :src="card.imageUrl"
    class='w-[75px]'
    alt="Sneaker" />
  <div class='flex-grow'>
    <h3 class='text-[16px]'>{{card.title}}</h3>
    <b class='text-[20px]'>{{card.price}} руб.</b>
  </div>
  <button @click='$emit("delete")' class='opacity-50 hover:opacity-100 transition-opacity'>
    <img src='/close.svg' alt='delete item' class=''>
  </button>

</article>
</template>

<style scoped>

</style>