import type { IProduct } from '~/types/types'

export async function getProducts(): Promise<IProduct[] | null> {
  const loader = useLoaderStore()
  loader.start()
  try {
    const { data, pending, error, refresh } = await useFetch(
      'https://604781a0efa572c1.mokky.dev/items',
    )
    if (Array.isArray(data.value)) {
      return data.value.filter((el: IProduct | any) => {
        if (el.id && el.title && el.price && el.imageUrl) {
          return el
        }
      })
    }
    return null
  } catch (e) {
    alert(e)
    return null
  } finally {
    loader.end()
  }
}
