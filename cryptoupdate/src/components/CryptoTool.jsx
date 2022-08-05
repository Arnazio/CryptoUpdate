import React, { useEffect, useState } from 'react'

export default function CryptoTool({ coinName, data }) {
    console.log(data);
    const [marketCap, setMarketCap] = useState(data.market_cap / 800000000)
    console.log(marketCap)
    
    return(
        <div className='coin-card' style={{ backgroundImage: `url(${data.image})`, width: marketCap, height: marketCap }}>
            <h1 className='title'>{coinName}</h1>
            <h3 className='markcap'> {data.market_cap}$</h3>
            <h3 className ='currentprice'>{data.current_price}$</h3>
            
            {/* <img src={data.image} alt="KRIJG KANKER AAN DE OGEN + OOK AIDS EN ANDERE ZOOI" /> */}
            
        </div>
    )
}
