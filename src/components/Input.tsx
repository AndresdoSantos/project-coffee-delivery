import { InputHTMLAttributes } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: IInputProps) {
  return (
    <input
      {...props}
      type="text"
      className="h-[2.625rem] w-full px-3 rounded border border-[#E6E5E5] bg-[#EDEDED] text-sm placeholder:text-[#8D8686] outline-none"
    />
  )
}
