import React, { useState } from 'react';
import Table from '../Table/Table';
import TableContainerCSS from './TableContainer.module.css'

const TableContainer = (props) => {

    const TableCol = {
        one:<table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th style={{textAlign:'right'}}>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((d, index) => <Table key={index} title={d.name} col='one'/>)}
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
                    {props.data.map((d, index) => <Table key={index} title={d.name} director={d.directorName} col='two'/>)}
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
            <button className='p-2' onClick={() => props.setModal(true)}>+</button>
        </div>
        <div className='p-2'>
            {theTable}
        </div>
        <div style={{display: props.modal ? 'block' : 'none'}} className={TableContainerCSS.Modal}>
            <h5>Add A Movie</h5>
            <div>
                <label>Name</label>
                <input type='text'/>
            </div>
            <button>Add</button>
            <button onClick={() => props.setModal(false)}>Cancel</button>
        </div>
    </div>
  )
}

export default TableContainer