import React from "react";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import FooterFinal from "./components/FooterFinal";

function TV() {
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
      <Row title="Action/Adventure" fetchUrl={requests.fetchTvAdventure} />
      <Row title="Animation" fetchUrl={requests.fetchtvAnimation} />
      <Row title="Drama" fetchUrl={requests.fetchTvDrama} />
      <Row title="Crime" fetchUrl={requests.fetchTvCrime} />
      <Row title="Comedy" fetchUrl={requests.fetchTvComedy} />
      <Row title="Family" fetchUrl={requests.fetchTvFamily} />
      <Row title="Scifi/Fantasy" fetchUrl={requests.fetchTvScifi} />
      <Row title="Mystery" fetchUrl={requests.fetchTvMystery} />
      <FooterFinal />
    </div>
  );
}

export default TV;
