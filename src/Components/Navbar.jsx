import React, {useState,useEffect} from 'react'
import '../Styles/Navbar.css'
import Logo from '../Media/logo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import SideMenu from './SideMenu';

function Navbar() {

    const [active, setActive] = useState(0);
    const [show, setShow] = useState(false)
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 960px)").matches)

    useEffect(() => {
        window
        .matchMedia("(min-width: 960px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

    const names = ["Solutions", "Produits", "Tarification", "Intégration"];

    const select = i => {
        setActive(i);
      };

      const openMenu = () => {
        setShow(true);
    }

    const closeMenu = () => {
        setShow(false);
    }

    return (
        <div className='navbar'>
            {matches && <div className='navbar_headband'>
                Participez à notre webinaire 2023 au salon du numérique à Paris / Promotion exclusive courant 2023
            </div>}
            <div className='navbar_flex'>
                <img className='navbar_img' src={Logo} alt="Logo" />
                <ul className='navbar_ul'>
                    {!matches && <MenuIcon onClick={openMenu} fontSize="large" className='navbar_menu'/>}
                    {show && <SideMenu onClose={closeMenu}/>}
                    {names.map((name, i) =>
                        <li key={i} onClick={() => select(i)} className={`navbar_li ${active === i ? "enable" : "disable"}`}>
                            {matches && name}
                        </li>
                    )}
                    {matches && <SearchIcon className='navbar_icons' fontSize="large"/>}
                    {matches && <PersonIcon className='navbar_icons' fontSize="large"/>}        
                </ul>
            </div>
        </div>
    )
}

export default Navbar