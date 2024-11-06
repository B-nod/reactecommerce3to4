import React from 'react'
import './btn.css'

const Btn = (props) => {
  return (
    <>
    <button className='btn'>{props.btn_content}</button>
    </>
  )
}

export default Btn