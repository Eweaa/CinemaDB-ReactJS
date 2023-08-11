import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableContainer from '../../Components/TableContainer/TableContainer';
import { Backdrop } from '../../Components/Backdrop/Backdrop';


const Movies = () => {
    
  const token = JSON.parse(localStorage.getItem('dataKey'));
  
    const [movies, setMovies] = useState([]);
    const [modal, setModal] = useState(false);
    
    const getMovies = () => {
        axios.get('https://localhost:7250/api/Movie', {headers:{Authorization:`Bearer ${token}`}}).then(res => {setMovies(res.data); console.log(res.data)})
    }

    useEffect(() => getMovies(), [])

  return (
    <div>
      <Backdrop modal={modal} setModal={setModal}/>
        <h1>Movies</h1>
        <div>
          <TableContainer data={movies} modal={modal} setModal={setModal} col='two'/>
        </div>
    </div>
  )
}

export default Movies