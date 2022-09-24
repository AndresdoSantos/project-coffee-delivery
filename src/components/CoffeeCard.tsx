import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useRecoilState } from 'recoil'

import { cart, ICart } from '../atoms/cart'

interface ICoffeeCardProps {
  id: number
  tags: string[]
  name: string
  description: string
  price: number
  imageUrl: string
}

export function CoffeeCard({
  description,
  tags,
  name,
  price,
  imageUrl,
  id,
}: ICoffeeCardProps) {
  const [quantity, setQuantity] = useState(0)

  const [cartState, setCartState] = useRecoilState(cart)

  function handleAddCoffeeInCart() {
    const coffeeAlreadyExists = cartState.find((coffee) => coffee.id === id)

    if (coffeeAlreadyExists) {
      const oldCoffees = cartState.filter((coffee) => coffee.id !== id)

      const newCoffee: ICart = {
        ...coffeeAlreadyExists,
        quantity,
      }

      setCartState(() => [...oldCoffees, newCoffee])
    } else {
      setCartState((old) => [...old, { id, name, price, quantity, imageUrl }])
    }
  }

  return (
    <div className="relative text-center flex flex-col items-center justify-center h-80 w-64 bg-[#F3F2F2] rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md pt-[6.375rem] px-5 pb-5">
      <img
        src={imageUrl}
        alt=""
        className="absolute -top-[1.875rem] left-[calc(8rem_-_3.75rem)]"
      />

      <section className="flex items-center justify-center flex-wrap gap-2">
        {tags.map((tag) => (
          <div key={tag} className="bg-[#F1E9C9] rounded-full py-1 px-2">
            <p className="text-[#C47F17] text-[10px] font-bold leading-[130%]">
              {tag}
            </p>
          </div>
        ))}
      </section>

      <h4 className="font-['Baloo_2'] text-xl text-[#403937] font-bold leading-[130%] mt-4">
        {name}
      </h4>

      <p className="text-[#8D8686] text-sm mt-2">{description}</p>

      <footer className="flex items-center justify-between mt-8 w-full">
        <div className="flex items-center justify-end gap-x-1">
          <p className="text-[#574F4D] text-sm leading-[130%]">R$</p>
          <p className="font-['Baloo_2'] font-extrabold text-2xl text-[#403937] leading-[130%] text-right">
            {(price / 100).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>

        <section className="flex items-center gap-x-2">
          <div className="flex items-center justify-between h-[2.375rem] w-[4.5rem] bg-[#E6E5E5] rounded-md p-3">
            <button
              disabled={quantity === 0}
              onClick={() => setQuantity((old) => (old > 0 ? old - 1 : old))}
            >
              <Minus weight="bold" color="#8047F8" />
            </button>
            <p className="text-[#272221] text-center">{quantity}</p>
            <button onClick={() => setQuantity((old) => old + 1)}>
              <Plus weight="bold" color="#8047F8" />
            </button>
          </div>

          <button
            type="button"
            disabled={quantity === 0}
            className={`${
              quantity === 0 && 'cursor-not-allowed'
            } flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-md bg-[#4B2995] transition duration-200 hover:brightness-110 active:scale-75`}
            onClick={handleAddCoffeeInCart}
          >
            <ShoppingCart weight="bold" color="#fff" />
          </button>
        </section>
      </footer>
    </div>
  )
}
