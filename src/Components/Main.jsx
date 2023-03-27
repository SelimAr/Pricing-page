import React from 'react'
import Prices from './Prices';
import '../Styles/Main.css'
import data from '../Data/data.json'

function Main() {
    return (
        <div className='main'>
            <div className='main_title'>Tarification</div>
            <div className='main_container'>
                <div className='main_content'>
                    {data.slice(0,3).map((d) =>
                        <Prices key={d.id}
                            flatrate={d.flatrate}
                            price={d.price}
                            options={d.options}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Main