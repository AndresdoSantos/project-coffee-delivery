import { Form } from '../components/Form'
import { CoffeeSelectedItem } from '../components/CoffeeSelectedItem'
import { Theme } from '../components/Theme'

import img from '../assets/coffees/traditionalExpress.svg'

export function Checkout() {
  return (
    <Theme>
      <div className="grid grid-cols-2 gap-x-8">
        <div>
          <h1 className="font-['Baloo_2'] font-extrabold text-lg mt-[2.5rem] leading-[130%] text-[#403937]">
            Complete seu pedido
          </h1>

          <Form />
        </div>

        <div>
          <h1 className="font-['Baloo_2'] font-extrabold text-lg mt-[2.5rem] leading-[130%] text-[#403937]">
            Cafés selecionados
          </h1>
          <main className="w-full mt-4 rounded-tl-md rounded-tr-[44px] rounded-bl-[44px] rounded-br-md p-10 bg-[#F3F2F2]">
            <CoffeeSelectedItem
              image={img}
              name="Expresso Tradicional"
              price="9,90"
            />

            <section className="flex items-center justify-between mb-3">
              <p className="text-[#574F4D]">Total de itens</p>
              <p className="text-[#574F4D]">R$ 9,90</p>
            </section>
            <section className="flex items-center justify-between mb-3">
              <p className="text-[#574F4D]">Entrega</p>
              <p className="text-[#574F4D]">R$ 3,50</p>
            </section>
            <section className="flex items-center justify-between mb-3">
              <strong className="text-[#403937] text-xl">Total</strong>
              <strong className="text-[#403937] text-xl">R$ 13,40</strong>
            </section>

            <button className="h-[46px] w-full bg-[#DBAC2C] rounded-md">
              <strong className="text-white text-sm">CONFIRMAR PEDIDO</strong>
            </button>
          </main>
        </div>
      </div>
    </Theme>
  )
}
