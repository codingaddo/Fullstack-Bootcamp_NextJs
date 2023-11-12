import React from 'react'

const Menu = ({children,text}) => {
  return (
    <div>
        {text}
        {children}
    </div>
  )
}

export default Menu