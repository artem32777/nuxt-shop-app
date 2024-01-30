<script setup lang="ts">
const productsStore = useProductsStore()
</script>

<template>
  <div>
    <ProductsList
    :products='productsStore.get'
    list-title='Все кроссовки'
    />
  </div>
</template>

<style scoped></style>
