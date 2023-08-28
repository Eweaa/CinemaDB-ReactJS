import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import TableContainer from '../../Components/TableContainer/TableContainer';

const Directors = () => {

  const token = JSON.parse(localStorage.getItem('dataKey'));

  const [directors, setDirectors] = useState([]);
  const [modal, setModal] = useState(false);

  const getDirectors = () => {
    axios.get('/api/Director', {headers:{Authorization:`Bearer ${token}`}}).then(res => {
      setDirectors(res.data)
    })
  }

  function DeleteDirector (ID){
    return function(){
      axios.delete('/api/Director/' + ID, {headers:{Authorization:`Bearer ${token}`}}).then(() => {
        // setDeleteModal(true)
      })
    }
  }

  const PostData = (data) => {

    // const data = NameRef?.current?.value;
    console.log('this is the data: ', data)
    const actor = {name: data}
    axios.post('/api/Director', actor, {headers:{Authorization:`Bearer ${token}`}})
    setModal(false);
  }

  useEffect(() => getDirectors(), [])

  return (
    <div className='p-4'>
      <h1>Directors</h1>
      <TableContainer data={directors} col='one' modal={modal} setModal={setModal} delete={DeleteDirector}/>
    </div>
  )
}

export default Directors