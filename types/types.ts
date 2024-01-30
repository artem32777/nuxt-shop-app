export interface IMenu {
  title: string,
  icon: string,
  altTxt: string
  url: string
}


export interface IProduct {
  id: number
  title: string
  price: number
  imageUrl: string
  isFavorite?: boolean
  favoriteId?: string | null
  isAdded?: boolean
}
