//css
import './MovieGrid.css'

//hooks
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

//components
import MovieCard from '../components/MovieCard'

const apiKey = import.meta.env.VITE_API_KEY
const searchUrl = import.meta.env.VITE_SEARCH


const Search = () => {

  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])

  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()
    
    setMovies(data.results)
  }

  useEffect(() => {

    const searchedUrl = `${searchUrl}?${apiKey}&query=${query}`

    getSearchedMovies(searchedUrl)

  }, [query])

  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className='query_text'>{query}</span></h2>
      <div className="movies_container">
        {movies.length > 0 && movies.map((movie) =>  <MovieCard key={movie.id} movie={movie} /> )}
      </div>
    </div>
  )
}

export default Search