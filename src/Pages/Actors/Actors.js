import axios from 'axios';
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
    axios.get('https://localhost:7250/api/Actor', {headers:{Authorization:`Bearer ${token}`}}).then(res => {
      setActors(res.data);
      console.log(res.data)
    })
  }


  const PostData = () => {
    const data = NameRef.current.value;
    console.log('this is the data: ', data)
    // setPostData({name:data})
    // setPostData(prevState => ({
    //   name: prevState.name = data
    // }))
    // console.log('this is the post data: ', postData)
    const actor = {name: data}
    axios.post('https://localhost:7250/api/Actor', actor, {headers:{Authorization:`Bearer ${token}`}})
  }

 

  function DeleteActor (ID){
    return function(){
      axios.delete('https://localhost:7250/api/Actor/' + ID).then(() => {
        setDeleteModal(true)
      })
    }
  }


  useEffect(() => getActors(), [])
  
  return (
    <div>
      <Backdrop modal={modal} setModal={setModal}/>
      <h1>Actors</h1>

      <div>
        <TableContainer data={actors} col='one' modal={modal} setModal={setModal}/>
      </div>

      {/* <div style={{display: modal ? 'block' : 'none'}}>
        <div>
          <h2>Add An Actor</h2>
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <label>Name</label>
        <input type='text' ref={NameRef}/>
        <button onClick={PostData}>Add</button>
      </div> */}

    </div>
  )
}

export default Actors