import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import logoImg from '../../../assets/logo.svg'
import localeIcon from '../../../assets/locale.svg'

export function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <img src={logoImg} alt="Logo da loja" />

      <section className="flex items-center gap-x-3 h-[2.375rem]">
        <button
          type="button"
          className="flex items-center gap-x-2 bg-[#EBE5F9] min-w-[6.25rem] px-2 h-full rounded-md"
        >
          <img src={localeIcon} alt="Ícone de geolocalização" />

          <p className="text-[#4B2995] text-sm">Porto Alegre, RS</p>
        </button>
        <Link
          to="checkout"
          className="flex items-center px-2 h-full rounded-md bg-[#F1E9C9]"
        >
          <ShoppingCart weight="fill" color="#C47F17" />
        </Link>
      </section>
    </header>
  )
}
