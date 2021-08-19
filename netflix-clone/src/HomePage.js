import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import FooterFinal from "./components/FooterFinal";

function HomePage() {
  return (
    <div>
      {/* we want to build a nav bar*/}
      {/* we want to build a banner*/}
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Thriller" fetchUrl={requests.fetchThrillerMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcomingMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <FooterFinal />
    </div>
  );
}

export default HomePage;
