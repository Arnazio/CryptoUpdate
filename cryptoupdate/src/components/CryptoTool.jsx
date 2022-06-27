import React, { useEffect, useState } from 'react'

export default function CryptoTool({ coinName, data }) {
    // console.log(data);
    
    return(
        <div className='coin-card'>
            <h1>{coinName}</h1>
            <h3 className='markcap'> {data.market_cap}$</h3>
            <h3 className ='currentprice'>{data.current_price}$</h3>
            
            <img src={data.image} alt="KRIJG KANKER AAN DE OGEN + OOK AIDS EN ANDERE ZOOI" />
            
        </div>
    )
}
//tis half 2 mijn hoofd denkt niemeer aan syntax hahaha
// hoe typed ge js in html in jsx?
//haahhahahaha hello guys this is my project can i get internship
// daarom
//2 pixels en witte achtergrond 