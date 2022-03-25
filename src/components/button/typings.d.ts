import { CSSProperties } from 'react'

type ButtonType = 'default' | 'primary' | 'link'

interface BaseButtonProps {
  type: ButtonType
  className: string
  style: CSSProperties
}

export type AnchorButtonProps = BaseButtonProps & HTMLAnchorElement

export type NativeButtonProps = BaseButtonProps & HTMLButtonElement

export type ButtonProps = Partial<AnchorButtonProps | NativeButtonProps>
