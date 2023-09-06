import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import TableContainer from '../../Components/TableContainer/TableContainer';

const Directors = () => {

  const token = JSON.parse(localStorage.getItem('dataKey'));

  const [directors, setDirectors] = useState([]);
  const [modal, setModal] = useState(false);

  const getDirectors = () => {
    console.log(`'we didn't talk to the server`)
    axios.get('/Director', {headers:{Authorization:`Bearer ${token}`}}).then(res => {
      console.log('we talked to the server')
      setDirectors(res.data)
    })
  }

  function DeleteDirector (ID){
    return function(){
      axios.delete('/Director/' + ID, {headers:{Authorization:`Bearer ${token}`}}).then(() => {
        // setDeleteModal(true)
      })
    }
  }

  const PostData = (data) => {

    // const data = NameRef?.current?.value;
    console.log('this is the data: ', data)
    const director = {name: data}
    axios.post('/Director', director, {headers:{Authorization:`Bearer ${token}`}})
    setModal(false);
  }

  useEffect(() => getDirectors(), [])

  return (
    <div className='p-4'>
      <h1>Directors</h1>
      <TableContainer data={directors} added='Director' col='one' modal={modal} create={PostData} setModal={setModal} delete={DeleteDirector}/>
    </div>
  )
}

export default Directors