import React from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
      <Hero />
      <Row rowId='1' title="Popular" fetchURL={requests.requestPopular}/>
      <Row rowId='2' title="Top Rated" fetchURL={requests.requestTopRated}/>
      <Row rowId='3' title="Trending" fetchURL={requests.requestTrending}/>
      <Row rowId='5' title="Upcoming" fetchURL={requests.requestUpcoming}/>
    </div>
  )
}

export default Home