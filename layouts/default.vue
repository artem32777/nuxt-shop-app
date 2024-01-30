<script setup lang="ts">
const loader = useLoaderStore()
const products = useProductsStore()

import { getProducts } from '~/utils/getProducts'


products.set(await getProducts())
loader.start()
onMounted(()=>{
  loader.end()
  document.body.style.touchAction = 'auto'
  document.body.style.overflow = 'auto'
})

</script>

<template>
  <LayoutLoader v-show='loader.isLoading'/>
  <div class="my-5 min-h-screen rounded-3xl bg-white px-5 pb-1 mb-20 shadow-xl">
    <LayoutHeader/>
    <section class='mb-20 mt-10'>
      <slot />
    </section>
    <LayoutFooter/>
  </div>

  <UiToaster/>
  <LayoutAsideCart/>

</template>
