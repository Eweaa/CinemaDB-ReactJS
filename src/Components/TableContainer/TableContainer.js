import React, { useRef, useState } from 'react';
import Table from '../Table/Table';
import TableContainerCSS from './TableContainer.module.css'

const TableContainer = (props) => {

    const name = useRef();


    const TableCol = {
        one:<table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th style={{textAlign:'right'}}>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((d, index) => <Table key={d.id} id={d.id} title={d.name} col='one' delete={props.delete} />)}
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
            <h5>Add A Movie</h5>
            <div>
                <label>Name</label>
                <input type='text'/>
            </div>
            <button className='mx-1 mt-2' >Add</button>
            <button className='mx-1 mt-2' onClick={() => props.setModal(false)}>Cancel</button>
        </div>
    </div>
  )
}

export default TableContainer