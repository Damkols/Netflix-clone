const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
 fetchTrending: `${BASE_URL}/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
 fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_networks=213`,
 fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
 fetchUpcoming: `${BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US`,
 fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=28`,
 fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=35`,
 fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=27`,
 fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=10749`,
 fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=99`,
};

export default requests;

// import requests from "@/utils/requests";
// import React from "react";
// import { Movie } from "@/typings";

// interface Props {
//  netflixOriginals: Movie[];
//  trendingNow: Movie[];
//  topRated: Movie[];
//  upcoming: Movie[];
//  actionMovies: Movie[];
//  comedyMovies: Movie[];
//  horrorMovies: Movie[];
//  romanceMovies: Movie[];
//  documentaries: Movie[];
// }

// const Home = ({
//  netflixOriginals,
//  trendingNow,
//  topRated,
//  upcoming,
//  actionMovies,
//  comedyMovies,
//  horrorMovies,
//  romanceMovies,
//  documentaries,
// }: Props) => {
//  console.log(netflixOriginals);
//  console.log(trendingNow);
//  console.log(topRated);
//  console.log(upcoming);
//  console.log(actionMovies);
//  console.log(comedyMovies);
//  console.log(horrorMovies);
//  console.log(romanceMovies);
//  console.log(documentaries);
//  return (
//   <div>
//    {/* {netflixOriginals?.map((movie) => (
//     <h1 key={movie.id}>{movie.title}</h1>
//    ))} */}
//    <h1 className="text-3xl font-bold underline">Hello world!</h1>
//   </div>
//  );
// };

// // This gets called on every request

// export async function getServerSideProps() {
//  // Fetch data from an external API
//  const [
//   netflixOriginalsRes,
//   trendingNowRes,
//   topRatedRes,
//   upcomingRes,
//   actionMoviesRes,
//   comedyMoviesRes,
//   horrorMoviesRes,
//   romanceMoviesRes,
//   documentariesRes,
//  ] = await Promise.all([
//   fetch(requests.fetchNetflixOriginals),
//   fetch(requests.fetchTrending),
//   fetch(requests.fetchTopRated),
//   fetch(requests.fetchUpcoming),
//   fetch(requests.fetchActionMovies),
//   fetch(requests.fetchComedyMovies),
//   fetch(requests.fetchHorrorMovies),
//   fetch(requests.fetchRomanceMovies),
//   fetch(requests.fetchDocumentaries),
//  ]);
//  const [
//   netflixOriginals,
//   trendingNow,
//   topRated,
//   upcoming,
//   actionMovies,
//   comedyMovies,
//   horrorMovies,
//   romanceMovies,
//   documentaries,
//  ] = await Promise.all([
//   netflixOriginalsRes.json(),
//   trendingNowRes.json(),
//   topRatedRes.json(),
//   upcomingRes.json(),
//   actionMoviesRes.json(),
//   comedyMoviesRes.json(),
//   horrorMoviesRes.json(),
//   romanceMoviesRes.json(),
//   documentariesRes.json(),
//  ]);

//  // Pass data to the page via props
//  return {
//   props: {
//    netflixOriginals,
//    trendingNow,
//    topRated,
//    upcoming,
//    actionMovies,
//    comedyMovies,
//    horrorMovies,
//    romanceMovies,
//    documentaries,
//   },
//  };
// }

// export default Home;
