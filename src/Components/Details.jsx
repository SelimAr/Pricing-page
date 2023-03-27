import React from 'react'
import '../Styles/Details.css'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from '../Data/data.json'

function Details() {
  return (
    <div className='details'>
        <p className='details_title'>Une automatisation à toutes épreuves</p>
        <div className='details_container'>
            <div className='details_flex'>
                {data.slice(3, 9).map((dt) =>
                    <div className='details_block'>
                        <AccountTreeIcon fontSize="large"/>
                        <p className='details_content' key={dt.id}>{dt.test}</p>
                    </div>
                )}
            </div>
        </div>
        <div className='details_section'>inscrivez vous à notre newsletter</div>
        <div className='details_newsletter'>
            <input type="email" placeholder='@Email' className='details_input' required/>
            <button className='details_btn'><ArrowForwardIcon /></button>
        </div>
        <div className='details_bg'>
            <span className='bubble1'></span>
            <span className='bubble2'></span>
            <div className='details_bottom'>
                <p className='details_news'>Notre version 17.4 est sortie !</p>
                <p className='details_news'>Rendez vous à notre webinaire 2023 pour la veille technologique annuel.</p>
                <p className='details_news info'>plus d'informations <ErrorOutlineIcon style={{marginLeft:"5px"}}/></p>
            </div>
        </div>
    </div>
  )
}

export default Details