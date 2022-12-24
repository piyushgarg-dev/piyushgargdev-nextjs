import { Fragment } from "react";
import axios from "axios";
import Head from "next/head";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import Portfolio from "../components/UI/Portfolio";
import Contact from "../components/UI/Contact";

export default function Home({ youtubeStats, youtubeVideos }) {
  return (
    <Fragment>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Piyush Garg - Dev and Instructor</title>
        <meta name="title" content="Piyush Garg - Dev and Instructor" />
        <meta
          name="description"
          content="Hi there! My name is Piyush Garg and I’m a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others. Whether you’re a beginner looking to learn the basics or an experienced developer looking to expand your skills, I’ve got something for you."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://piyushgarg.dev" />
        <meta property="og:title" content="Piyush Garg - Dev and Instructor" />
        <meta
          property="og:description"
          content="Hi there! My name is Piyush Garg and I’m a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others. Whether you’re a beginner looking to learn the basics or an experienced developer looking to expand your skills, I’ve got something for you."
        />
        <meta
          property="og:image"
          content="https://piyushgarg.dev/images/seo.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://piyushgarg.dev" />
        <meta
          property="twitter:title"
          content="Piyush Garg - Dev and Instructor"
        />
        <meta
          property="twitter:description"
          content="Hi there! My name is Piyush Garg and I’m a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others. Whether you’re a beginner looking to learn the basics or an experienced developer looking to expand your skills, I’ve got something for you."
        />
        <meta
          property="twitter:image"
          content="https://piyushgarg.dev/images/seo.png"
        />
      </Head>
      <Hero />
      <Services youtubeVideos={youtubeVideos} youtubeStats={youtubeStats} />
      <Portfolio />
      <Contact />
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
