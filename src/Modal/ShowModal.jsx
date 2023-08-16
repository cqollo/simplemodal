import React from 'react'
import "./modal.css"

const ShowModal = (props) => {
  return (
    <div>
      <button className='showBtn' onClick={props.onClick}>Show Modal</button>
    </div>
  )
}

export default ShowModal
