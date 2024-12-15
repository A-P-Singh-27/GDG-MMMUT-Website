import Logo from '@/Components/Logo'


import styles from "../Pages/Events.module.css"
import Button from '@/Components/Button'
import { Navbar } from '@/stylings/Navbar'
import { Main } from '@/stylings/Main'
import { NavLink, useNavigate } from 'react-router-dom'


function Header() {
    const navigate=useNavigate();
    function handlenavigate(){
        navigate("/signup")
    }
    return (
        <Navbar>
                    <Logo/>
                    <Main>
                        <NavLink to='/' classname={styles.navlink}>Home</NavLink>
                        <NavLink to='/blogs' classname={styles.navlink}>Blogs</NavLink>
                        <NavLink to='/events' classname={styles.navlink}>Events</NavLink>
                        <NavLink to='/team' classname={styles.navlink}>Team</NavLink>
                        <NavLink  to="/contact"  classname={styles.navlink}>Contact Us</NavLink>
        
                    </Main>
                    <button  onClick={handlenavigate} className='bg-blue-600 p-4 rounded-xl' >Join Us</button>
                </Navbar>
    )
}

export default Header