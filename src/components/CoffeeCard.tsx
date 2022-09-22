import img from '../assets/coffees/traditionalExpress.svg'
import minusIcon from '../assets/minus.svg'
import moreIcon from '../assets/more.svg'
import whiteCartIcon from '../assets/white-cart.svg'

export function CoffeeCard() {
  return (
    <div className="relative text-center flex flex-col items-center justify-center h-80 w-64 bg-[#F3F2F2] rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md pt-[6.375rem] px-5 pb-5">
      <img
        src={img}
        alt=""
        className="absolute -top-[1.875rem] left-[calc(8rem_-_3.75rem)]"
      />

      <div className="bg-[#F1E9C9] rounded-full py-1 px-2">
        <p className="text-[#C47F17] text-[10px] font-bold leading-[130%]">
          TRADICIONAL
        </p>
      </div>

      <h4 className="font-['Baloo_2'] text-xl text-[#403937] font-bold leading-[130%] mt-4">
        Expresso Tradicional
      </h4>

      <p className="text-[#8D8686] text-sm mt-2">
        O tradicional café feito com água quente e grãos moídos
      </p>

      <footer className="flex items-center justify-between mt-8 w-full">
        <div className="flex items-center justify-end gap-x-1">
          <p className="text-[#574F4D] text-sm leading-[130%]">R$</p>
          <p className="font-['Baloo_2'] font-extrabold text-2xl text-[#403937] leading-[130%] text-right">
            9,90
          </p>
        </div>

        <section className="flex items-center gap-x-2">
          <div className="flex items-center justify-between h-[2.375rem] w-[4.5rem] bg-[#E6E5E5] rounded-md p-3">
            <img src={minusIcon} alt="Ícone de menos" />
            <p className="text-[#272221] text-center">1</p>
            <img src={moreIcon} alt="Ícone de mais" />
          </div>

          <button
            type="button"
            className="flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-md bg-[#4B2995]"
          >
            <img src={whiteCartIcon} alt="Imagem de carrinho" />
          </button>
        </section>
      </footer>
    </div>
  )
}
