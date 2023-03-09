import React from "react";
import requests from "@/utils/requests";
import { Movie } from "@/typings";

interface Props {
 netflixOriginals: Movie[];
 trendingNow: Movie[];
 topRated: Movie[];
 upcoming: Movie[];
 actionMovies: Movie[];
 comedyMovies: Movie[];
 horrorMovies: Movie[];
 romanceMovies: Movie[];
 documentaries: Movie[];
}

const Home = ({
 netflixOriginals,
 trendingNow,
 topRated,
 upcoming,
 actionMovies,
 comedyMovies,
 horrorMovies,
 romanceMovies,
 documentaries,
}: Props) => {
 console.log(netflixOriginals);
 console.log(trendingNow);
 console.log(topRated);
 console.log(upcoming);
 console.log(actionMovies);
 console.log(comedyMovies);
 console.log(horrorMovies);
 console.log(romanceMovies);
 console.log(documentaries);
 return (
  <div>
   <h1 className="text-3xl font-bold underline">Hello world!</h1>
  </div>
 );
};

// This gets called on every request

export async function getServerSideProps() {
 // Fetch data from an external API
 const [
  netflixOriginalsRes,
  trendingNowRes,
  topRatedRes,
  upcomingRes,
  actionMoviesRes,
  comedyMoviesRes,
  horrorMoviesRes,
  romanceMoviesRes,
  documentariesRes,
 ] = await Promise.all([
  fetch(requests.fetchNetflixOriginals),
  fetch(requests.fetchTrending),
  fetch(requests.fetchTopRated),
  fetch(requests.fetchUpcoming),
  fetch(requests.fetchActionMovies),
  fetch(requests.fetchComedyMovies),
  fetch(requests.fetchHorrorMovies),
  fetch(requests.fetchRomanceMovies),
  fetch(requests.fetchDocumentaries),
 ]);
 const [
  netflixOriginals,
  trendingNow,
  topRated,
  upcoming,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
 ] = await Promise.all([
  netflixOriginalsRes.json(),
  trendingNowRes.json(),
  topRatedRes.json(),
  upcomingRes.json(),
  actionMoviesRes.json(),
  comedyMoviesRes.json(),
  horrorMoviesRes.json(),
  romanceMoviesRes.json(),
  documentariesRes.json(),
 ]);

 // Pass data to the page via props
 return {
  props: {
   netflixOriginals,
   trendingNow,
   topRated,
   upcoming,
   actionMovies,
   comedyMovies,
   horrorMovies,
   romanceMovies,
   documentaries,
  },
 };
}

export default Home;
