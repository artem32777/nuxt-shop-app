<script setup lang="ts">
import { MENU_DATA } from '~/constants/constants'
import { useCartDrawerStore } from '~/stores/drawer.store'
import { useCartStore } from '~/stores/cart.store'
import { formattedPrice } from '~/utils/formattedPrice'

const drawerStore = useCartDrawerStore()

const cartStore = useCartStore()


defineEmits<{
  (e: 'cart'): void
}>()

const itemStyles =
  'flex items-center gap-3 text-slate-600 font-bold font-mono hover:text-black transition-colors'
</script>

<template>
  <ul class="flex text-xl items-center gap-10">
    <li
      v-for="item in MENU_DATA"
      :key="item.title">
      <NuxtLink
        :class="itemStyles"
        :href="item.url">
        <img
          :src="item.icon"
          :alt="item.altTxt"
          width="20" />
        {{ item.title }}
      </NuxtLink>
    </li>

    <li>
      <button
        @click="drawerStore.toggle"
        :class="itemStyles" class='text-2xl text-purple-700'>
        <img
          src="/cart.svg"
          alt="Cart"
          width="30" />
        {{formattedPrice(cartStore.get)}}
      </button>
    </li>

  </ul>
</template>

<style scoped></style>
