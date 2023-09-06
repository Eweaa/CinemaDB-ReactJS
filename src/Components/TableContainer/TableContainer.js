import React, { useRef, useState } from 'react';
import Table from '../Table/Table';
import TableContainerCSS from './TableContainer.module.css'

const TableContainer = (props) => {

    const nameRef = useRef();
    const nameRef2 = useRef();

    const TableCol = {
        one:<table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th style={{textAlign:'right'}}>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((d, index) => <Table key={index} id={d.id} title={d.name} col='one' delete={props.delete} />)}
                </tbody>
            </table>,
        two:<table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th style={{textAlign:'right'}}>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((d, index) => <Table key={index} id={d.id} title={d.name} director={d.directorName} col='two' delete={props.delete}/>)}
                </tbody>
            </table>
    }

    const [col, setCol] = useState(props.col);
    let theTable = TableCol.one

    if(col === 'two')
    theTable = TableCol.two

   const getdata = () => {
    const data = nameRef.current.value;
    // const theData = {name:data}
    props.create(data)
   }

  return (
    <div className={TableContainerCSS.TableContainer}>
        <div className={[TableContainerCSS.TableContainerHeader, 'p-2'].join(' ')}>
            <input type='text' placeholder='search' className='p-1'/>
            <button className='btn btn-primary p-2' onClick={() => props.setModal(true)}>Add</button>
        </div>
        <div className='p-2'>
            {theTable}
        </div>
        <div style={{display: props.modal ? 'block' : 'none'}} className={[TableContainerCSS.Modal, 'p-4'].join(' ')}>
            <h5>Add A {props.added}</h5>
            <div>
                <label>Name</label>
                <input type='text' ref={nameRef}/>
            </div>
            <button className='mx-1 mt-2' onClick={getdata}>Add</button>
            <button className='mx-1 mt-2' onClick={() => props.setModal(false)}>Cancel</button>
        </div>
        
        {/* <div style={{display: props.modal ? 'block' : 'none'}} className={[TableContainerCSS.Modal, 'p-4'].join(' ')}>
            <h5>Add A {props.added}</h5>
            <div>
                <label>Name</label>
                <input type='text' ref={nameRef}/>
            </div>
            <div>
                <select>
                    {props.data.map((d, index) => <option key={index} value={d.directorId} ref={nameRef2}>{d.directorName}</option>)}
                </select>
            </div>
            <button className='mx-1 mt-2' onClick={getdata}>Add</button>
            <button className='mx-1 mt-2' onClick={() => props.setModal(false)}>Cancel</button>
        </div> */}

    </div>
  )
}

export default TableContainer