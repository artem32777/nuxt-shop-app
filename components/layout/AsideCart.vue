<script setup lang="ts">
const drawerStore = useCartDrawerStore()
</script>

<template>
  <UiSheet
    :open="drawerStore.isOpen"
    @update:open="drawerStore.toggle">
    <UiSheetContent class="flex flex-col">
      <UiSheetHeader>
        <UiSheetTitle>Корзина</UiSheetTitle>
        <UiSheetDescription>
          Совершайте покупку в два клика!
        </UiSheetDescription>
      </UiSheetHeader>

      <LayoutAsideCartContent />
    </UiSheetContent>
  </UiSheet>
</template>

<style scoped></style>
