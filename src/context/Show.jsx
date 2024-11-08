import React from 'react'
import ComA from './ComA'
import { GlobalContextProider } from './GlobalContextProvider'

const Show = () => {
  return (
    <>
    <GlobalContextProider>
    <ComA/>
    </GlobalContextProider>
   
    </>
  )
}

export default Show