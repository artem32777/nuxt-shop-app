import type { IMenu } from '~/types/types'

export const LOCAL_STORAGE_KEY = 'nuxt-shop-app'

export const MENU_DATA: IMenu[] = [
  {
    title: 'Каталог',
    icon: '/heart.svg',
    altTxt: 'Каталог магазина',
    url: './'
  },
  {
    title: 'Избранное',
    icon: '/heart.svg',
    altTxt: 'Избранные товары',
    url: '/favorites'
  },
  {
    title: 'Профиль',
    icon: '/profile.svg',
    altTxt: 'Личный кабинет',
    url: '/profile'
  }
]

export const enum SORT_BY {
  default = 'default',
  minPrice = 'min-price',
  maxPrice = 'max-price'
}