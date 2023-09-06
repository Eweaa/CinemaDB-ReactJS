import React, { useEffect, useState } from 'react'
import DashboardStatCard from '../../Components/DashboardStatCard/DashboardStatCard'
import axios from '../../api/axios';
import DashboardCSS from './Dashboard.module.css';

const Dashboard = () => {

    const [actor, setActor] = useState([]);
    const [movie, setMovie] = useState([]);
    const [director, setDirector] = useState([]);

    const token = JSON.parse(localStorage.getItem('dataKey'));

    const getData = () => {

        axios.get('/Actor', {headers:{Authorization:`Bearer ${token}`}}).then((res) => {
            setActor(res.data)
        })

        axios.get('/Movie', {headers:{Authorization:`Bearer ${token}`}}).then((res) => {
            setMovie(res.data)
        })

        axios.get('/Director', {headers:{Authorization:`Bearer ${token}`}}).then((res) => {
            setDirector(res.data)
        })

    }

    useEffect(() => {   
        getData()
    }, [])

  return (
    <div>

        <div className={[DashboardCSS.Dashboard, 'p-4'].join(' ')}>

            <h1>Database Summary</h1>

            <div className={[DashboardCSS.stats, 'p-4'].join(' ')}>
                <DashboardStatCard title='No. of Actors' length={actor.length} color='2px solid blue'/>
                <DashboardStatCard title='No. of Movies' length={movie.length} color='2px solid green'/>
                <DashboardStatCard title='No. of Directors' length={director.length} color='2px solid red'/>
                <DashboardStatCard title='No. of TV Series' length={director.length} color='2px solid yellow'/>
            </div>

        </div>

    </div>

  )
}

export default Dashboard