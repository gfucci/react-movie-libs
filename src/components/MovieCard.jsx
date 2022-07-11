import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const imagesUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className='movie_card'>
        <img src={imagesUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`movie/${movie.id}`}>Detalhes do Filme</Link>}
    </div>
  )
}

export default MovieCard