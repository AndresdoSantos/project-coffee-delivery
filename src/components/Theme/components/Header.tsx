import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useRecoilValue } from 'recoil'

import { cartSelector } from '../../../atoms/cart'

import logoImg from '../../../assets/logo.svg'

export function Header() {
  const coffees = useRecoilValue(cartSelector)

  const totalOfCoffeesAddedInCart = coffees.total

  return (
    <header className="flex items-center justify-between py-8">
      <img src={logoImg} alt="Logo da loja" />

      <section className="flex items-center gap-x-3 h-[2.375rem]">
        <button
          type="button"
          className="flex items-center gap-x-2 bg-[#EBE5F9] min-w-[6.25rem] px-2 h-full rounded-md"
        >
          <MapPin weight="fill" color="#4B2995" />

          <p className="text-[#4B2995] text-sm">Porto Alegre, RS</p>
        </button>
        <Link
          to="checkout"
          className="flex items-center px-2 h-full rounded-md bg-[#F1E9C9] relative"
        >
          {totalOfCoffeesAddedInCart > 0 && (
            <div className="z-50 absolute -top-2 -right-2 flex items-center justify-center bg-[#C47F17] rounded-full h-5 w-5">
              <p className="text-xs font-bold text-white leading-none">
                {totalOfCoffeesAddedInCart}
              </p>
            </div>
          )}

          <ShoppingCart weight="fill" color="#C47F17" />
        </Link>
      </section>
    </header>
  )
}
