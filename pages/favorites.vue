<script setup lang="ts">
const productsStore = useProductsStore()
</script>

<template>
  <ProductsList
    :products="
      productsStore.get && productsStore.get.filter((el) => el.isFavorite)
    "
    list-title="Избранное" />
</template>

<style scoped></style>