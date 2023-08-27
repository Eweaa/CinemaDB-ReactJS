import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TableContainer from '../../Components/TableContainer/TableContainer';

const Directors = () => {

  const token = JSON.parse(localStorage.getItem('dataKey'));

  const [directors, setDirectors] = useState([]);
  const [modal, setModal] = useState(false);

  const getDirectors = () => {
    axios.get('https://localhost:7250/api/Director', {headers:{Authorization:`Bearer ${token}`}}).then(res => {
      setDirectors(res.data)
    })
  }

  useEffect(() => getDirectors(), [])

  return (
    <div>
      <h1>Directors</h1>
      <TableContainer data={directors} col='one' modal={modal} setModal={setModal}/>
    </div>
  )
}

export default Directors