import axios from '../../api/axios';
import React, { useEffect, useRef, useState } from 'react'
import TableContainer from '../../Components/TableContainer/TableContainer';
import AddModal from '../../Components/AddModal/AddModal';
import { Backdrop } from '../../Components/Backdrop/Backdrop';

const Actors = () => {

  const NameRef = useRef();

  // let [postData, setPostData] = useState({name:''})

  const [actors, setActors] = useState([]);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const token = JSON.parse(localStorage.getItem('dataKey'));

  const getActors = () => {
    axios.get('/Actor', {headers:{Authorization:`Bearer ${token}`}}).then(res => {
      setActors(res.data);
    })
  }


  const PostData = (data) => {
    console.log('it works and this is the data: ', data)
    const actor = {name: data}
    axios.post('/Actor', actor, {headers:{Authorization:`Bearer ${token}`}})
    getActors();
    setModal(false);
  }

 

  function DeleteActor (ID){
    return function(){
      axios.delete('/Actor/' + ID, {headers:{Authorization:`Bearer ${token}`}}).then(() => {
        getActors();
        setDeleteModal(true)
      })
    }
  }


  useEffect(() => getActors(), [])
  
  return (
    <div className='p-4'>
      <Backdrop modal={modal} setModal={setModal}/>
      <h1>Actors</h1>
      <div>
        <TableContainer data={actors} added='Actor' col='one' modal={modal} setModal={setModal} create={PostData} delete={DeleteActor}/>
      </div>

    </div>
  )
}

export default Actors