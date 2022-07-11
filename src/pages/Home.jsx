import { useEffect, useState } from "react"

//components
import MovieCard from "../components/MovieCard"

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()
    
    setTopMovies(data.results)
  }

  useEffect(() => {

    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl)

  }, [])

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes</h2>
      <div className="movies_container">
        {topMovies.length > 0 && topMovies.map((movie) =>  <MovieCard key={movie.id} movie={movie} /> )}
      </div>
    </div>
  )
}

export default Home