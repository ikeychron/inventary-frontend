import React from 'react'
import classnames from 'classnames'
import { get } from 'lodash'
import styles from './styles'

const Text = ({
  component: Component, theme, className, children, ...rest
}) => {
  const classNames = classnames({
    [get(styles, theme, 'default')]: true,
    [className]: !!className
  })

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  )
}

Text.defaultProps = {
  className: '',
  theme: 'default',
  component: 'p'
}


export default Text
