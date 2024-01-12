'use client'
import React, { useState, useEffect } from 'react';
import CoinCard from '../components/CoinCard';

function Home() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {  
        const fetchCoins = async () => {
            const response = await fetch('https://api.coinlore.net/api/tickers/');
            const data = await response.json();  
            setCoins(data.data.slice(0, 20));
        };
        fetchCoins();
    
    },[])

    return (
        <div className='home'>
            <h1>Top 20 Cryptos</h1>
            <div className='coins-container'>
                {coins.map((coin) => (
                    <CoinCard coin={coin} key={coin.id} />
                ))}
            </div>
        </div>
    )
}

export default Home