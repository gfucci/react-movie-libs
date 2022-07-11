import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <h2>
            <Link to='/'>
                <BiCameraMovie /> MoviesLib
            </Link>
        </h2>
        <form action="">
            <input type="text" placeholder='' />
            <button type="submit">
                <BiSearchAlt2 />
            </button>
        </form>
    </nav>
  )
}

export default NavBar