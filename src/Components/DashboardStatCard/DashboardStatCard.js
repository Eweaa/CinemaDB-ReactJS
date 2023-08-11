import React from 'react'
import DashboardStatCardCSS from './DashboardStatCard.module.css'

const DashboardStatCard = (props) => {
  return (
    <div className={[DashboardStatCardCSS.DashboardStatCard, 'p-2'].join(' ')} style={{borderBottom:props.color}}>
      <h4>{props.title}</h4>
      {props.length}
    </div>
  )
}

export default DashboardStatCard