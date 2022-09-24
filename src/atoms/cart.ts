import { atom, selector } from 'recoil'

export interface ICart {
  name: string
  quantity: number
  price: number
  id: number
  imageUrl: string
}

const DEFAULT: ICart[] = []

export const cart = atom({
  key: 'CART_STATE_ATOM',
  default: DEFAULT,
})

export const cartSelector = selector({
  key: 'CART_STATE_SELECTOR',
  get: ({ get }) => ({
    total: get(cart).length,
    totalPayable: get(cart).reduce(
      (curr, acc) => curr + acc.price * acc.quantity,
      0,
    ),
  }),
})
