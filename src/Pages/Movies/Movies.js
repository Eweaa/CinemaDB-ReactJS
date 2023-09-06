import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import TableContainer from '../../Components/TableContainer/TableContainer';
import { Backdrop } from '../../Components/Backdrop/Backdrop';


const Movies = () => {
    
  const token = JSON.parse(localStorage.getItem('dataKey'));
  
    const [movies, setMovies] = useState([]);
    const [modal, setModal] = useState(false);
    
    const getMovies = () => {
        axios.get('/Movie', {headers:{Authorization:`Bearer ${token}`}}).then(res => {
          console.log(res.data)
          setMovies(res.data)})
    }

    function DeleteMovie (ID){
      return function(){
        axios.delete('/Movie/' + ID, {headers:{Authorization:`Bearer ${token}`}}).then(() => {
          // setDeleteModal(true)
        })
      }
    }

    const PostData = (data) => {
      const movie = {name: data.name, directorId: data.directorId}
      console.log(movie)
      // axios.post('/Movie', movie, {headers:{Authorization:`Bearer ${token}`}})
      setModal(false);
    }

    useEffect(() => getMovies(), [])

  return (
    <div className='p-4'>
      <Backdrop modal={modal} setModal={setModal}/>
        <h1>Movies</h1>
        <div>
          <TableContainer data={movies} modal={modal} setModal={setModal} create={PostData} col='two' delete={DeleteMovie}/>
        </div>
    </div>
  )
}

export default Movies