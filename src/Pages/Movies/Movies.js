import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import TableContainer from '../../Components/TableContainer/TableContainer';
import { Backdrop } from '../../Components/Backdrop/Backdrop';


const Movies = () => {
    
  const token = JSON.parse(localStorage.getItem('dataKey'));
  
    const [movies, setMovies] = useState([]);
    const [modal, setModal] = useState(false);
    
    const getMovies = () => {
        axios.get('/api/Movie', {headers:{Authorization:`Bearer ${token}`}}).then(res => {setMovies(res.data)})
    }

    function DeleteMovie (ID){
      return function(){
        axios.delete('/api/Movie/' + ID, {headers:{Authorization:`Bearer ${token}`}}).then(() => {
          // setDeleteModal(true)
        })
      }
    }

    useEffect(() => getMovies(), [])

  return (
    <div className='p-4'>
      <Backdrop modal={modal} setModal={setModal}/>
        <h1>Movies</h1>
        <div>
          <TableContainer data={movies} modal={modal} setModal={setModal} col='two' delete={DeleteMovie}/>
        </div>
    </div>
  )
}

export default Movies