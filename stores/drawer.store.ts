export const useCartDrawerStore = defineStore('drawer', ()=> {
  const isOpen = ref<boolean>(false)
  const toggle = () => isOpen.value = !isOpen.value
  return { isOpen, toggle}
})