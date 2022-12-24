import { Fragment } from "react";
import axios from "axios";

import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";

export default function Home({ youtubeStats, youtubeVideos }) {
  return (
    <Fragment>
      <Hero />
      <Services youtubeVideos={youtubeVideos} youtubeStats={youtubeStats} />
      {/* <About /> */}
      <Portfolio />
      {/* <Testimonial /> */}
      {/* <Contact /> */}
    </Fragment>
  );
}

async function getYoutubeStatsForChannelId(id) {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=AIzaSyDezsveebPt38oIqjLDE-T28PrRClhHjPQ`
  );
  if (response && "data" in response) {
    if (
      "items" in response.data &&
      Array.isArray(response.data.items) &&
      response.data.items.length > 0
    )
      return response.data.items[0];
  }
  return null;
}

async function getYoutubeVideos() {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDezsveebPt38oIqjLDE-T28PrRClhHjPQ&part=snippet&channelId=UCf9T51_FmMlfhiGpoes0yFA&order=date"
  );
  if (response && "data" in response) {
    if (
      "items" in response.data &&
      Array.isArray(response.data.items) &&
      response.data.items.length > 0
    )
      return response.data.items;
  }
  return null;
}

export async function getStaticProps(context) {
  const [youtubeStats, youtubeVideos] = await Promise.all([
    getYoutubeStatsForChannelId("UCf9T51_FmMlfhiGpoes0yFA"),
    getYoutubeVideos(),
  ]);

  return {
    props: {
      youtubeStats,
      youtubeVideos,
    }, // will be passed to the page component as props
    revalidate: 43200, // 12 Hrs
  };
}
