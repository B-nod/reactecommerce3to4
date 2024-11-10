import React from 'react'
import { useSelector } from 'react-redux'

const Student = () => {
    const data = useSelector(store=>store.student)
  return (
    <>
    <h1 className='text-center my-5 text-2xl text-black text-semibold'>The full name of student is {data.name}</h1>

    </>
  )
}

export default Student