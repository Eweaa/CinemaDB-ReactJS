import React, { useRef } from 'react'

const AddModal = (props) => {

  const name = useRef();



  return (
    <div className='p-2' style={{display: props.show ? 'block' : 'none'}}>
        <div>
            <h2>Add {props.added}</h2>
        </div>
        <div>
            <label>Name</label>
            <input type='text' ref={name}/>
        </div>
    </div>
  )
}

export default AddModal