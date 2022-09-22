import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import localeOutlineImg from '../assets/locale-outline.svg'
import { Input } from './Input'

export function Form() {
  return (
    <>
      <main className="w-full mt-4 rounded-md p-10 bg-[#F3F2F2]">
        <header className="flex items-start">
          <img src={localeOutlineImg} alt="" />

          <section className="block ml-3">
            <h2 className="text-[#403937]">Endereço de Entrega</h2>
            <h2 className="text-[#574F4D] text-sm">
              Informe o endereço onde deseja receber seu pedido
            </h2>
          </section>
        </header>

        <form action="" className="flex flex-col gap-y-4 mt-8">
          <div className="w-[12.5rem]">
            <Input placeholder="CEP" />
          </div>
          <Input placeholder="Rua" />
          <div className="flex items-center gap-x-3">
            <div className="min-w-[12.5rem]">
              <Input placeholder="Número" />
            </div>
            <div className="flex items-center justify-between h-[2.625rem] w-full px-3 rounded border border-[#E6E5E5] bg-[#EDEDED]">
              <input
                type="text"
                placeholder="Complemento"
                className="bg-inherit flex-1 placeholder:text-[#8D8686] text-sm outline-none"
              />
              <i className="text-[#8D8686] text-xs">Opcional</i>
            </div>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="min-w-[12.5rem]">
              <Input placeholder="Bairro" />
            </div>
            <div className="flex items-center gap-x-3 w-full">
              <Input placeholder="Cidade" />
              <div className="w-[3.75rem]">
                <Input placeholder="UF" />
              </div>
            </div>
          </div>
        </form>
      </main>

      <main className="w-full mt-4 rounded-md p-10 bg-[#F3F2F2]">
        <header className="flex items-start">
          <CurrencyDollar weight="bold" color="#8047F8" />

          <section className="block ml-3">
            <h2 className="text-[#403937]">Pagamento</h2>
            <h2 className="text-[#574F4D] text-sm">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h2>
          </section>
        </header>

        <section className="flex gap-x-3 mt-8 w-full">
          <button className="h-[2.625rem] w-full px-4 rounded-md flex items-center bg-[#E6E5E5]">
            <CreditCard weight="bold" color="#8047F8" />
            <span className="text-[#574F4D] text-xs ml-3">
              CARTÃO DE CRÉDITO
            </span>
          </button>

          <button className="h-[2.625rem] w-full px-4 rounded-md flex items-center bg-[#E6E5E5]">
            <Bank weight="bold" color="#8047F8" />
            <span className="text-[#574F4D] text-xs ml-3">
              CARTÃO DE DÉBITO
            </span>
          </button>

          <button className="h-[2.625rem] w-full px-4 rounded-md flex items-center bg-[#E6E5E5]">
            <Money weight="bold" color="#8047F8" />
            <span className="text-[#574F4D] text-xs ml-3">DINHEIRO</span>
          </button>
        </section>
      </main>
    </>
  )
}
