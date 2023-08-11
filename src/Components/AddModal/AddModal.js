import React from 'react'

const AddModal = (props) => {
  return (
    <div style={{display: props.show ? 'block' : 'none'}}>
        <div>
            <h2>Add {props.added}</h2>
        </div>
        <div>
            <label>Name</label>
            <input type='text'/>
        </div>
    </div>
  )
}

export default AddModal