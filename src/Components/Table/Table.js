import React, { useState } from 'react'

const Table = (props) => {
  // console.log('thees sfaf: ', props)
  const tableBody = {
    one:<tr>
          <td>{props.title}</td>
          <td style={{textAlign:'right'}}>
              <button className='btn btn-warning text-white mx-1'>Edit</button>
              <button onClick={props.delete(props.id)} className='btn btn-danger'>Delete</button>
          </td>
      </tr>,
    two:<tr>
          <td>{props.title}</td>
          <td>{props.director}</td>
          <td style={{textAlign:'right'}}>
              <button className='btn btn-warning text-white mx-1'>Edit</button>
              <button onClick={props.delete(props.id)} className='btn btn-danger'>Delete</button>
          </td>
      </tr>
  }

  const [col, setCol] = useState(props.col)
  let tableBodyCol = tableBody.one

  if(col === 'two'){
    tableBodyCol = tableBody.two
  }

  return (
    tableBodyCol
  )
}

export default Table