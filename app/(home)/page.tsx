import { Metadata } from "next"
import Movie from "../../components/movie";
import styles from '../../styles/home.module.css';
import { API_URL } from "../constants";

export const metadata: Metadata = {
  title: "Home",
}

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  // const res = await fetch(URL)
  // const json = await res.json()
  // return json
  return await fetch(API_URL).then(res => res.json())
}

export default async function HomePage() {
  const movies = await getMovies()
  return (
    <div className={styles.container}>
      {movies.map(movie => 
        <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
      )}
    </div>
  )
}