import React from 'react'
import { useDispatch } from 'react-redux'

const ChangeItem = () => {
    const dispatch = useDispatch()

    const add = ()=>{
        dispatch({type:"ADD_TO_CART"})
    }
  return (
    <>
    <div className="flex justify-center my-10">
        <button className="px-3 py-2 bg-green-500 text-white" onClick={add}>Add</button>
        <button className="px-3 py-2 bg-red-500 ml-10 text-white">Remove</button>
    </div>
    </>
  )
}

export default ChangeItem