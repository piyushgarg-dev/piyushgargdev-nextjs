import React, { useEffect, useMemo, useState } from "react";
import { Container } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import SectionSubtitle from "../../components/UI/SectionSubtitle";
import axios from "axios";

const DISCORD_AUTH_URL = process.env.NEXT_PUBLIC_DIRCORD_OPENSOURCE_INVITE_URL;

const LEARNING_OUTCOMES = [
  "Understanding the concept of open source",
  "Exploring successful open source projects and communities",
  "Setting up a Git repository",
  "Branching and merging in Git",
  "Issue Tracking and Management",
  "Git Pull Requests and Reviews",
  "Open source licenses",
  "Choosing the appropriate license for a project",
];

const PREREQUISITES = [
  "Basic Programming Knowledge",
  "Web Development - HTML, CSS & Javascript",
  "Familiarity with Version Control (GIT)",
  "Reading and Understanding Documentation",
];

const OpenSourceInviteDiscordCallbackPage = ({ host }) => {
  const { query, route, replace: routerReplace, pathname } = useRouter();
  const hasDiscordCode = useMemo(() => Boolean(query.code), [query]);

  const protocol = useMemo(
    () => (process.env.NODE_ENV === "production" ? "https://" : "http://"),
    []
  );

  const [isAPISuccessfull, setIsAPISuccessfull] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (hasDiscordCode) {
      const code = query.code;
      if (!code || isAPISuccessfull || loading) return;
      setLoading(true);
      axios
        .post("/api/open-source-discord", {
          code,
          redirect_uri: `${protocol}${host}${route}`,
        })
        .then(() => {
          setIsAPISuccessfull(true);
          setLoading(false);
          routerReplace(
            { pathname, query: { ...query, code: undefined } },
            undefined,
            { shallow: true }
          );
        });
    }
  }, [
    hasDiscordCode,
    host,
    isAPISuccessfull,
    loading,
    pathname,
    protocol,
    query,
    query.code,
    route,
    routerReplace,
  ]);

  return (
    <Container className="my-5">
      <SectionSubtitle subtitle="Open Source 🚀" />
      <h4 className="mt-4 text-3xl font-bold ">Free OpenSource BootCamp ✨</h4>

      <div className="mt-4 text-white">
        <h6 className="text-2xl text-slate-200">Learning Outcomes</h6>
        {LEARNING_OUTCOMES.map((el) => (
          <div key={el} className="flex gap-2 items-center mt-2">
            <input type="checkbox" className="bg-green-500 h-4 w-4" />
            <p className="text-slate-400">{el}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 text-white">
        <h6 className="text-2xl text-slate-200">Prerequisites</h6>
        {PREREQUISITES.map((el) => (
          <div key={el} className="flex gap-2 items-center mt-2">
            <input type="checkbox" className="bg-green-500 h-4 w-4" />
            <p className="text-slate-400">{el}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <div className="relative inline-flex group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-pulse hover:animate-none from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <Link
            href={DISCORD_AUTH_URL}
            title="Get quote now"
            className="relative text-sm sm:text-md md:text-lg text-center items-center justify-center px-8 py-4  font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            <span className="block">Join Open Source BootCamp 🎉</span>
            <span className="block text-slate-500 text-sm">
              Starting 1st June, 2023 on Discord
            </span>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default OpenSourceInviteDiscordCallbackPage;

export const getServerSideProps = (context) => {
  const host = context.req.headers.host;
  return {
    props: { host },
  };
};
