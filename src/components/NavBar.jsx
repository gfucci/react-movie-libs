import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'


const NavBar = () => {
  return (
    <nav>
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