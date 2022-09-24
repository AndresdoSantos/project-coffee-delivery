import { createElement, ElementType } from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { IconProps } from 'phosphor-react'

interface IRadioProps extends RadioGroup.RadioGroupItemProps {
  icon: ElementType<IconProps>
}

export function Radio({ icon, value, ...rest }: IRadioProps) {
  return (
    <RadioGroup.Item
      {...rest}
      value={value}
      className="h-[2.625rem] w-full px-4 rounded-md flex items-center bg-[#E6E5E5] border border-[#E6E5E5]"
    >
      <RadioGroup.Indicator />
      {createElement(icon, {
        color: '#8047F8',
        weight: 'bold',
      })}
      <span className="text-[#574F4D] text-xs ml-3">{value}</span>
    </RadioGroup.Item>
  )
}
