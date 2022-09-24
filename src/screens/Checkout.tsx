import { useEffect } from 'react'
import cep from 'cep-promise'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as z from 'zod'
import { useForm, FormProvider } from 'react-hook-form'

import { cart, cartSelector } from '../atoms/cart'

import { Form } from '../components/Form'
import { CoffeeSelectedItem } from '../components/CoffeeSelectedItem'
import { Theme } from '../components/Theme'

const formSchema = z.object({
  zipcode: z
    .string()
    .max(8, 'Não pode passar de 8 caracteres')
    .min(1, 'Deve ter no mínimo 1 caractere.'),
  street: z
    .string()
    .min(1, 'Deve ter mais de 3 caracteres.')
    .max(120, 'Não pode passar de 120 caracteres.'),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  federativeUnion: z.string(),
  number: z.number(),
})

export type TForm = z.infer<typeof formSchema>

export function Checkout() {
  const methods = useForm<TForm>()

  const navigate = useNavigate()

  const [cartState] = useRecoilState(cart)
  const { totalPayable } = useRecoilValue(cartSelector)

  const onSubmit = (data: TForm) => {
    const paymentMethod = (
      window.document.querySelector('[data-state="checked"]') as any
    )?.value

    if (!paymentMethod) {
      alert('Adicione uma forma de pagamento!')
    }

    console.log({
      address: {
        ...data,
      },
      product: {
        coffess: cartState,
        paymentMethod,
        totalPayable,
      },
    })

    navigate(
      `/success/${data.street}/${data.number}/${data.city}/${data.federativeUnion}/${paymentMethod}`,
    )
  }

  const zipcode = methods.watch('zipcode')

  useEffect(() => {
    if (zipcode?.length === 8) {
      cep(zipcode).then((res) => {
        console.log(res)
        methods.reset({
          city: res.city,
          neighborhood: res.neighborhood,
          federativeUnion: res.state,
          street: res.street,
        })
      })

      methods.setFocus('number')
    }
  }, [methods, zipcode])

  return (
    <Theme>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data: TForm) => onSubmit(data))}
          className="grid grid-cols-2 gap-x-8"
        >
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
              {cartState.map((coffee) => (
                <CoffeeSelectedItem key={coffee.id} {...coffee} />
              ))}

              <section className="flex items-center justify-between mb-3">
                <p className="text-[#574F4D]">Total de itens</p>
                <p className="text-[#574F4D]">R$ {totalPayable / 100}</p>
              </section>
              <section className="flex items-center justify-between mb-3">
                <p className="text-[#574F4D]">Entrega</p>
                <p className="text-[#574F4D]">R$ 3,50</p>
              </section>
              <section className="flex items-center justify-between mb-3">
                <strong className="text-[#403937] text-xl">Total</strong>
                <strong className="text-[#403937] text-xl">
                  R$ {(totalPayable + 350) / 100}
                </strong>
              </section>

              <button className="h-[46px] w-full bg-[#DBAC2C] rounded-md">
                <strong className="text-white text-sm">CONFIRMAR PEDIDO</strong>
              </button>
            </main>
          </div>
        </form>
      </FormProvider>
    </Theme>
  )
}
