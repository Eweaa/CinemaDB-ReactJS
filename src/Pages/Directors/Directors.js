import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Directors = () => {

  const token = JSON.parse(localStorage.getItem('dataKey'));

  const [directors, setDirectors] = useState([]);

  const getDirectors = () => {
    axios.get('https://localhost:7250/api/Director', {headers:{Authorization:`Bearer ${token}`}}).then(res => {
      setDirectors(res.data)
    })
  }

  useEffect(() => getDirectors(), [])

  return (
    <div>
      <h1>Directors</h1>
      <div>
        {directors.map((d, index) => <div key={index}>{d.name}</div>)}
      </div>
    </div>
  )
}

export default Directors