import { Fragment } from "react";
import axios from "axios";
import Head from "next/head";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import Courses from "../components/UI/Courses";
import Contact from "../components/UI/Contact";
import Blog from "../components/UI/Blog";
import Terminal from "../components/UI/Terminal";
import Testimonial from "../components/UI/Testimonial";

import {
  getYoutubeChannelDataDefaultResponse,
  getYoutubeVideosDefaultResponse,
} from "../components/data/youtubeDefault";
import feedbacks from "../components/data/testimonial";
import courses from "../components/data/courses";

import { Container } from "reactstrap";
import SectionSubtitle from "../components/UI/SectionSubtitle";

export default function Home({
  youtubeStats,
  youtubeVideos,
  blogData,
  feedbacks = [],
  courses = [],
}) {
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
        <meta property="og:url" content="https://www.piyushgarg.dev" />
        <meta property="og:title" content="Piyush Garg - Dev and Instructor" />
        <meta
          property="og:description"
          content="Hi there! My name is Piyush Garg and I’m a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others. Whether you’re a beginner looking to learn the basics or an experienced developer looking to expand your skills, I’ve got something for you."
        />
        <meta
          property="og:image"
          content="https://www.piyushgarg.dev/images/seo.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.piyushgarg.dev" />
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
          content="https://www.piyushgarg.dev/images/seo.png"
        />
      </Head>
      <Hero />
      <Services youtubeVideos={youtubeVideos} youtubeStats={youtubeStats} />
      <Courses courses={courses} />
      <Testimonial feedbacks={feedbacks} />
      <Container className="mt-5">
        <SectionSubtitle subtitle="Terminal" />
        <div
          id="terminal-1"
          style={{ border: "1px solid white", height: "400px" }}
        >
          <Terminal />
        </div>
      </Container>
      <Contact />
    </Fragment>
  );
}

async function getYoutubeStatsForChannelId(id) {
  let response = { data: null };
  try {
    response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${process.env.GOOGLE_API_KEY}`
    );
  } catch (error) {
    response.data = getYoutubeChannelDataDefaultResponse;
  }

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
  let response = { data: null };
  try {
    response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.GOOGLE_API_KEY}&part=snippet&channelId=UCf9T51_FmMlfhiGpoes0yFA&order=date`
    );
  } catch (error) {
    response.data = getYoutubeVideosDefaultResponse;
  }

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

export async function getRecentBlogs() {
  const response = await axios.post(
    "https://gql.hashnode.com",
    {
      query:
        '{\n  user(username: "piyushgarg") {\npublicationDomain \n    publication {\n     posts(page: 1) {\n  _id\n totalReactions\n  brief\n    title\n        slug\n        coverImage\n      }\n    }\n  }\n}',
    },
    {
      responseType: "json",
    }
  );
  return response.data?.data;
}

export async function getStaticProps(context) {
  try {
    const [youtubeStats, youtubeVideos, blogResponse] = await Promise.all([
      getYoutubeStatsForChannelId("UCf9T51_FmMlfhiGpoes0yFA"),
      getYoutubeVideos(),
      
    ]);

    return {
      props: {
        youtubeStats,
        youtubeVideos,
        blogData: [],
        feedbacks: feedbacks.map((feedBack) => ({
          ...feedBack,
          course: courses.find((e) => e.id === feedBack.courseId),
        })),
        courses,
      }, // will be passed to the page component as props
      revalidate: 43200, // 12 Hrs
    };
  } catch (error) {}
}
