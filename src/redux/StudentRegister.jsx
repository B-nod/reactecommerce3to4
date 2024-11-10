import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const StudentRegister = () => {
    const[name,setName]=useState('')
    const dispatch = useDispatch()

    const submit = (e)=>{
        e.preventDefault()
        dispatch({type:'Change_name', payload:name})
    }

  return (
    <>
    <div className="flex justify-center">
    <form action="" className='my-5'>
        <input type="text" name="name" id="name" placeholder='Enter a name' onChange={e=>setName(e.target.value)} />
        <button className="px-3 py-2 bg-red-500 text-white mt-5" onClick={submit}>Submit</button>
    </form>
    </div>
   
    </>
  )
}

export default StudentRegister