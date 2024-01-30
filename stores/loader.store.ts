export const useLoaderStore = defineStore('loader', ()=> {
  const store = ref<boolean>(true)
  const isLoading = computed(()=> store.value)
  const end = () => store.value = false
  const start = () =>  store.value = true
  return {store, isLoading, end, start}
})