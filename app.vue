<template>
  <div class="m-auto max-w-[1600px]">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  ogTitle: 'Магазин',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Магазин-${titleChunk}` : 'Магазин'
  },
})
</script>
