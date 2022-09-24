import { Minus, Plus, Trash } from 'phosphor-react'

interface ICoffeeSelectedItemProps {
  imageUrl: string
  name: string
  price: number
  quantity: number
}

export function CoffeeSelectedItem({
  imageUrl,
  name,
  price,
  quantity,
}: ICoffeeSelectedItemProps) {
  return (
    <div className="flex items-center border-b border-[#E6E5E5] pb-6 mb-6">
      <img src={imageUrl} alt="" className="w-16 h-16 mr-5" />

      <div className="block w-full">
        <header className="flex items-center justify-between mb-2">
          <p className="text-[#403937]">{name}</p>

          <strong className="text-[#574F4D]">
            R${' '}
            {((price * quantity) / 100).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </strong>
        </header>

        <footer className="flex items-center gap-x-2">
          <div className="flex items-center h-9 px-2 rounded-md bg-[#E6E5E5]">
            <Minus color="#8047F8" weight="bold" />
            <p className="mx-1 text-[#272221]">{quantity}</p>
            <Plus color="#8047F8" weight="bold" />
          </div>
          <div className="flex items-center h-9 px-2 rounded-md bg-[#E6E5E5]">
            <Trash color="#8047F8" weight="bold" />
            <p className="mx-1 text-[#574F4D]">Remover</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
