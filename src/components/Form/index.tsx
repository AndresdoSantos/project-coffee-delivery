import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { TForm } from '../../screens/Checkout'

import { Radio } from './components/Radio'

export function Form() {
  const { register } = useFormContext<TForm>()

  return (
    <>
      <main className="w-full mt-4 rounded-md p-10 bg-[#F3F2F2]">
        <header className="flex items-start">
          <MapPinLine color="#C47F17" />
          <section className="block ml-3">
            <h2 className="text-[#403937]">Endereço de Entrega</h2>
            <h2 className="text-[#574F4D] text-sm">
              Informe o endereço onde deseja receber seu pedido
            </h2>
          </section>
        </header>

        <div className="flex flex-col gap-y-4 mt-8">
          <input
            placeholder="CEP"
            className="input placeholder:text-[#8D8686] focus-within:border-[#A8A8A8] w-[12.5rem]"
            {...register('zipcode')}
            maxLength={8}
            minLength={1}
          />

          <input
            placeholder="Rua"
            className="input placeholder:text-[#8D8686] focus-within:border-[#A8A8A8] w-full"
            {...register('street')}
          />

          <div className="flex items-center gap-x-3">
            <input
              placeholder="Número"
              className="input placeholder:text-[#8D8686] focus-within:border-[#A8A8A8] min-w-[12.5rem]"
              {...register('number')}
            />
            <div className="flex items-center justify-between h-[2.625rem] w-full px-3 rounded border border-[#E6E5E5] bg-[#EDEDED] focus-within:border-[#A8A8A8]">
              <input
                type="text"
                placeholder="Complemento"
                {...register('complement')}
                className="bg-inherit flex-1 placeholder:text-[#8D8686] text-sm outline-none"
              />
              <i className="text-[#8D8686] text-xs">Opcional</i>
            </div>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              placeholder="Bairro"
              className="input placeholder:text-[#8D8686] focus-within:border-[#A8A8A8] min-w-[12.5rem]"
              {...register('neighborhood')}
            />
            <div className="flex items-center gap-x-3 w-full">
              <input
                placeholder="Cidade"
                className="input placeholder:text-[#8D8686] focus-within:border-[#A8A8A8] w-full"
                {...register('city')}
              />
              <input
                placeholder="UF"
                className="input placeholder:text-[#8D8686] focus-within:border-[#A8A8A8] w-[3.75rem]"
                {...register('federativeUnion')}
              />
            </div>
          </div>
        </div>
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

        <RadioGroup.Root className="flex gap-x-3 mt-8 w-full">
          <Radio icon={CreditCard} value="CARTÃO DE CRÉDITO" />
          <Radio icon={Bank} value="CARTÃO DE DÉBITO" />
          <Radio icon={Money} value="DINHEIRO" />
        </RadioGroup.Root>
      </main>
    </>
  )
}
