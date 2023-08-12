import React, { useEffect, useState } from 'react';
import HomeCSS from './Home.module.css';
import img1 from '../../Assets/Home1.jpg';
import img2 from '../../Assets/Home2.jpg';
import img3 from '../../Assets/Home3.jpg';

const Home = () => {

    const AoI = [img1, img2, img3]

    const [img, setImg] = useState(AoI[0]);

    // const slide = () => {
    //     for(let i = 0; i < AoI.length; i++){
    //         setTimeout(() => {
    //             console.log(i)
    //         }, 5000 * AoI.length)
    //     }
    // }

    let i = 0;
    

    function loop(i){
        setTimeout(function(){
            console.log(i);
            setImg(AoI[i])
        }, 4000 * i)
    }

    useEffect(() => {
        // slide()
        while (i < AoI.length) {
            loop(i);
            i++
        }
    }, [])


  return (
    <div>
        <div className={HomeCSS.carousel}>
            <img src={img}/>
            <div className={HomeCSS.imgShadow}></div>
        </div>
        <h3>What to Watch</h3>
        <h3>Top 10 on Cinema DB This Week</h3>
        <h3>Top News</h3>
    </div>
  )
}

export default Home