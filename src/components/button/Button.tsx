import classNames from 'classnames'
import { ButtonProps } from './typings'

export default function Button(props: Partial<ButtonProps>) {
  const { type = 'default', className, style } = props
  const classes = classNames('btn', className, {
    link: type === 'link',
    primary: type === 'primary',
  })

  if (type === 'link') {
    return (
      <div className={classes} style={style}>
        link
      </div>
    )
  }

  return (
    <div className={classes} style={style}>
      Button
    </div>
  )
}

Button.displayName = 'Button'
