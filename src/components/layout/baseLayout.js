import React from 'react'
import Header from '../pages/helper/header'

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default BaseLayout
