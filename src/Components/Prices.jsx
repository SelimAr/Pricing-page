import React from 'react'
import '../Styles/Prices.css'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import CheckIcon from '@mui/icons-material/Check';

function Prices({ flatrate, price, options }) {

    var optionsList = [];

    options.forEach((i)=>{
        optionsList.push(
            <p className='prices_options'>
                <CheckIcon style={{marginRight: "0.5em"}} fontSize="small"/>
                {i}
                <span style={{marginBottom: "4em"}}></span>
            </p>
        )
    })

    return (
        <div className='prices'>
            <p className='prices_flatrate'>{flatrate}</p>
            <p className='prices_price'>{price} <EuroSymbolIcon style={{marginLeft: "-15px"}}/></p>
            <div className='prices_center'>
                <button className='prices_sub'>Souscrire</button>
            </div>
            {optionsList}
        </div>
    )
}

export default Prices