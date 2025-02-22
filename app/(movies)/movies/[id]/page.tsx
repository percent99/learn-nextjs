import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// interface IParams {
//   params: Promise<{ id: string }>
// }
type PageParams = Promise<{ id: string }>

export async function generateMetadata({ params }: { params: PageParams}) {
  const { id } = await params
  const movie = await getMovie(id)
  return {
    title: movie.title,
  }
}

export default async function MovieDetail({ params }: { params: PageParams}) {
  const { id } = await params
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}