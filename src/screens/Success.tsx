import { useParams } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { Theme } from '../components/Theme'

import vehycleImg from '../assets/vehycle-delivery.svg'
import { useEffect } from 'react'

/** interface IParam {
  locale: string
  paymentMethod: string
} */

export function Success() {
  const param = useParams()

  useEffect(() => {
    window.localStorage.setItem('locale', String(param.locale))
  }, [param.locale])

  return (
    <Theme>
      <header className="mb-10">
        <h1 className="font-['Baloo_2'] font-extrabold text-3xl mt-[2.5rem] leading-[130%] text-[#C47F17]">
          Uhu! Pedido confirmado
        </h1>

        <p className="text-xl text-[#403937]">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </header>

      <main className="flex items-center justify-between">
        <div className="bg-gradient-to-r from-[#DBAC2C] to-[#8047F8] rounded-tr-[36px] rounded-bl-[36px] rounded-md p-[1px]">
          <main className="flex flex-col gap-y-8 bg-white p-9 rounded-tr-[36px] rounded-bl-[36px] rounded-md">
            <div className="flex items-center gap-x-3 z-10">
              <div className="flex items-center justify-center bg-[#8047F8] h-8 w-8 rounded-full">
                <MapPin weight="fill" color="#fff" />
              </div>

              <p className="text-[#574F4D] leading-[130%]">
                Entrega em{' '}
                <strong>
                  {param.street}, {param.number}
                </strong>{' '}
                {param.city} - {param.federativeUnion}
              </p>
            </div>

            <div className="flex items-center gap-x-3">
              <div className="flex items-center justify-center bg-[#DBAC2C] h-8 w-8 rounded-full">
                <Timer weight="fill" color="#fff" />
              </div>

              <p className="text-[#574F4D] leading-[130%]">
                Previsão de entrega <strong>20 min - 30 min </strong>{' '}
              </p>
            </div>

            <div className="flex items-center gap-x-3">
              <div className="flex items-center justify-center bg-[#C47F17] h-8 w-8 rounded-full">
                <CurrencyDollar weight="bold" color="#fff" />
              </div>

              <p className="text-[#574F4D] leading-[130%]">
                Pagamento na entrega <strong>{param.paymentMethod}</strong>
              </p>
            </div>
          </main>
        </div>

        <img src={vehycleImg} alt="Motoboy entregando" />
      </main>
    </Theme>
  )
}
