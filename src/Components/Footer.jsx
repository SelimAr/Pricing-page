import React from 'react'
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='footer_flex'>
                <ul className='footer_ul'>
                    <li className='footer_li'>Documentation</li>
                    <li className='footer_li'>Nous contacter</li>
                    <li className='footer_li'>Jobs</li>
                    <li className='footer_li'>Environnement</li>
                    <li className='footer_li'>Partenaires</li>
                </ul>
                <ul className='footer_ul'>
                    <li className='footer_li'>Solutions</li>
                    <li className='footer_li'>Produits</li>
                    <li className='footer_li'>Tarifications</li>
                    <li className='footer_li'>Intégration</li>
                    <li className='footer_li'>Développeurs</li>
                </ul>
                <ul className='footer_ul'>
                    <li className='footer_li'>Promotions</li>
                    <li className='footer_li'>Aide</li>
                    <li className='footer_li'>CGU</li>
                    <li className='footer_li'>mentions légales</li>
                </ul>
            </div>
            <div className='footer_copyright'>© Copyright - 2023</div>
        </div>
    </div>
  )
}

export default Footer