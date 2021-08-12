import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserHome from './UserHome';



const SuperMarketList = () => {
    
const [allSuperMarkets, setAllSuperMarkets] = useState([]);
const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/supermarkets')
            .then(res =>{ 
                setAllSuperMarkets(res.data)
                setLoaded(true);
            });
    }, [])


    return (
        <div>
            <UserHome />
            hi
        </div>
    )
}

export default SuperMarketList
