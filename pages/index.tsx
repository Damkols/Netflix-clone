import React from "react";
import requests from "@/utils/requests";
import { Movie } from "@/typings";
import Head from "next/head";
import { Header, Banner, Row } from "@/components";

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
 return (
  <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
   <Head>
    <title>Home - Netflix</title>
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <Header />
   <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
    <Banner netflixOriginals={netflixOriginals} />
    <section className="">
     <Row title="Trending now" movies={trendingNow} />
     <Row title="Top Rated" movies={topRated} />
     <Row title="Action thriller" movies={actionMovies} />
     {/* My List Row */}
     <Row title="Comedy Movies" movies={comedyMovies} />
     <Row title="Horror Movies" movies={horrorMovies} />
     <Row title="Documentaries" movies={documentaries} />
     <Row title="Upcoming movies" movies={upcoming} />
    </section>
   </main>
   {/* Modal */}
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
   netflixOriginals: netflixOriginals.results,
   trendingNow: trendingNow.results,
   topRated: topRated.results,
   upcoming: upcoming.results,
   actionMovies: actionMovies.results,
   comedyMovies: comedyMovies.results,
   horrorMovies: horrorMovies.results,
   romanceMovies: romanceMovies.results,
   documentaries: documentaries.results,
  },
 };
}

export default Home;
