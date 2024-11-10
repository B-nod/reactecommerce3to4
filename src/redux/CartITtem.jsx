import React from 'react'
import { useSelector } from 'react-redux'
import ChangeItem from './ChangeItem'
import Student from './Student'
import StudentRegister from './StudentRegister'

const CartITtem = () => {
    const data = useSelector(store=>store.cart)
  return (
    <>
    <h1>The number of items present in a cart is {data.cartData}</h1>
    <ChangeItem/>
    <Student/>
    <StudentRegister/>
    </>
  )
}

export default CartITtem