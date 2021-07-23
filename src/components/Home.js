import React from 'react';
import { Link} from 'react-router-dom';
const Home =()=>{
    return(
        <>
        <ol>
            <li><Link to="/home" >Home</Link></li>
            
            <li><Link to="/menu" >Menu</Link></li>
        </ol>
        </>
    )
}

export default Home; 