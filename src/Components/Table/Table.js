import React, { useState } from 'react'

const Table = (props) => {
  const tableBody = {
    one:<tr>
          <td>{props.title}</td>
          <td style={{textAlign:'right'}}>
              <button>Edit</button>
              <button>Delete</button>
          </td>
      </tr>,
    two:<tr>
          <td>{props.title}</td>
          <td>{props.director}</td>
          <td style={{textAlign:'right'}}>
              <button>Edit</button>
              <button>Delete</button>
          </td>
      </tr>
  }

  const [col, setCol] = useState(props.col)
  let tableBodyCol = tableBody.one

  if(col === 'one'){
    console.log('one from table')
  }


  if(col === 'two'){
    console.log('two from table')
    tableBodyCol = tableBody.two
  }

  return (
    tableBodyCol
  )
}

export default Table