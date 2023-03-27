import React from 'react'
import '../Styles/SideMenu.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';

function SideMenu({ onClose }) {

    const names = ["Solutions", "Produits", "Tarification", "Intégration"];

    return (
        <div className='sidemenu_background'>
            <div className='sidemenu'>
                <CloseIcon onClick={onClose} className='sidemenu_icons close' fontSize='large'/>
                <ul className="sidemenu_ul">
                    {names.map((name, i) =>
                        <li key={i} className='sidemenu_li'>
                            {name}
                        </li>
                    )}
                </ul>
                <div className='sidemenu_icons'>
                    <SearchIcon fontSize='large'/>
                    <PersonIcon fontSize='large'/>
                </div>
            </div>
        </div>
    )
}

export default SideMenu