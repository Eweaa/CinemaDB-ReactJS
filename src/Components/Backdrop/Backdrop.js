import React from 'react';
import BackdropCSS from './Backdrop.module.css'

export const Backdrop = (props) => {
  return (
    <div style={{display: props.modal ? 'block' : 'none'}} className={BackdropCSS.Backdrop} onClick={() => props.setModal(false)}></div>
  )
}
