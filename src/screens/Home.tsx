import { useEffect, useState } from 'react'

import whiteCartIcon from '../assets/white-cart.svg'
import cupIcon from '../assets/cup.svg'
import timerIcon from '../assets/timer.svg'
import packageIcon from '../assets/package.svg'
import cupWithBackgroundIcon from '../assets/cup-with-background.svg'

import { CoffeeCard } from '../components/CoffeeCard'
import { Theme } from '../components/Theme'

interface ICoffeeData {
  id: number
  description: string
  tags: string[]
  name: string
  price: number
  imageUrl: string
}

export function Home() {
  const [coffees, setCoffees] = useState<ICoffeeData[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/coffees')
      .then((response) => response.json())
      .then((data) => setCoffees(data))
  }, [])

  return (
    <Theme>
      <div className="flex items-center justify-center h-[34rem]">
        <div className="w-full">
          <h1 className="font-['Baloo_2'] font-extrabold text-5xl leading-[130%] text-[#403937]">
            Encontre o café perfeito para qualquer hora do dia
          </h1>

          <p className="text-[#403937] text-xl leading-[130%]">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <section className="grid grid-cols-2 gap-x-10 gap-y-5 mt-16">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center justify-center bg-[#C47F17] h-8 w-8 rounded-full">
                <img src={whiteCartIcon} alt="Logo de um carrinho" />
              </div>

              <p className="text-[#574F4D] leading-[130%]">
                Compra simples e segura
              </p>
            </div>

            <div className="flex items-center gap-x-3">
              <div className="flex items-center justify-center bg-[#574F4D] h-8 w-8 rounded-full">
                <img src={packageIcon} alt="Logo de uma embalagem" />
              </div>

              <p className="text-[#574F4D] leading-[130%]">
                Embalagem mantém o café intacto
              </p>
            </div>

            <div className="flex items-center gap-x-3">
              <div className="flex items-center justify-center bg-[#DBAC2C] h-8 w-8 rounded-full">
                <img src={timerIcon} alt="Logo de um cronômetro" />
              </div>

              <p className="text-[#574F4D] leading-[130%]">
                Entrega rápida e rastreada
              </p>
            </div>

            <div className="flex items-center gap-x-3">
              <div className="flex items-center justify-center bg-[#8047F8] h-8 w-8 rounded-full">
                <img src={cupIcon} alt="Logo de uma xícara" />
              </div>

              <p className="text-[#574F4D] leading-[130%]">
                O café chega fresquinho até você
              </p>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-end w-full">
          <img src={cupWithBackgroundIcon} alt="Imgem de um copo de café" />
        </div>
      </div>

      <h3 className="font-['Baloo_2'] font-extrabold text-3xl mb-14 leading-[130%] text-[#403937]">
        Nossos cafés
      </h3>

      <ul className="grid grid-cols-4 gap-x-8 gap-y-12">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} {...coffee} />
        ))}
      </ul>
    </Theme>
  )
}
