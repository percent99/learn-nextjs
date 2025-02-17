import { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

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
    <div>
      {movies.map(movie => 
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      )}
    </div>
  )
}