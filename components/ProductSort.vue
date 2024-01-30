<script setup lang="ts">

import  { SORT_BY } from '~/constants/constants'

const emit = defineEmits<{
  (e: 'searchValue', searchValue: string): void
  (e: 'sortValue', sortValue: SORT_BY): void
}>()

const searchValue = ref<string>('')
const sortValue = ref<SORT_BY>(SORT_BY.default)


</script>

<template>
  <div>
    <label class="relative mb-2 flex items-center gap-2">
      <UiInput
        @input="emit('searchValue', searchValue)"
        v-model="searchValue"
        class="w-[300px] pl-10" />
      <img
        src="/search.svg"
        alt="search"
        class="absolute left-4" />
    </label>
    <UiSelect
      v-model='sortValue'
      @update:modelValue='emit("sortValue", sortValue)'
>
      <UiSelectTrigger>
        <UiSelectValue placeholder="Сортировать по:" />
      </UiSelectTrigger>
      <UiSelectContent>
        <UiSelectGroup>
          <UiSelectLabel>Сортировать по:</UiSelectLabel>
          <UiSelectItem :value="SORT_BY.minPrice"> По цене (дешевые) </UiSelectItem>
          <UiSelectItem :value="SORT_BY.maxPrice"> По цене (дорогие) </UiSelectItem>
        </UiSelectGroup>
      </UiSelectContent>
    </UiSelect>
  </div>
</template>

<style scoped></style>
