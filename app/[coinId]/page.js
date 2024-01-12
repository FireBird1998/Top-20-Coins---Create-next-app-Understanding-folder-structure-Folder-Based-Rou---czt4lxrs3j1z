"use client"

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

function CoinDetail() {
    const [coin, setCoin] = useState(null);
    const params = useParams();
    const coinId = params.coinId;

    useEffect(() => {
        const fetchCoin = async () => {
            const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${coinId}`);
            const data = await response.json();  
            setCoin(data[0]);
        };
        fetchCoin();
    },[])

    return (
        <div className='coin-detail'>
            {coin ? (
                <>
                    <div className='name-symbol'>
                        <h1 className='name'>{`${coin.name}`}</h1>
                        <h2 className='symbol'>{`(${coin.symbol})`}</h2>
                    </div>
                    <div className='market-description'>
                        <p className='coin-rank'>{`Rank: ${coin.rank}`}</p>
                        <p className='coin-price'>{`Price: ${coin.price_usd}`}</p>
                        <p className='coin-market-cap'>{`Market Cap: ${coin.market_cap_usd}`}</p>
                        <p className='coin-total-supply'>{`Total Supply: ${coin.tsupply}`}</p>
                        <p className='coin-max-supply'>{`Max Supply: ${coin.msupply}`}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default CoinDetail
