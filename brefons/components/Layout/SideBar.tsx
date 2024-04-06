import React, { ReactNode } from 'react'

const SideBar = ({children}:{children:ReactNode}) => {
  return (
    <div>SideBar
        {children}
    </div>
  )
}

export default SideBar