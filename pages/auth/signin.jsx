import React from "react";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";
import { RiGithubFill } from "react-icons/ri";
import { BsDiscord } from "react-icons/bs";

// Simple provider-to-icon and style mapping
const providerConfig = {
  github: {
    icon: <RiGithubFill className="text-2xl mr-3" />,
    btn: "bg-black text-white hover:bg-zinc-900",
    label: "Sign in with GitHub",
    
  },
  discord: {
    icon: <BsDiscord className="text-xl mr-3 text-[#5865F2]" />,
    btn: "bg-indigo-400 text-white hover:bg-indigo-300",
    label: "Sign in with Discord",
  },
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers } };
}

export default function SignIn({ providers }) {
  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-[#0f1624] p-6">
        <div className="w-full max-w-md rounded-2xl bg-[#111827] shadow-xl p-6 sm:p-8 border border-[#1f2937]">
          <h1 className="text-center text-2xl font-semibold text-white mb-6">
            Welcome back
          </h1>
          <div className="space-y-4">
            {providers &&
              Object.values(providers).map((provider) => {
                const cfg = providerConfig[provider.id] || {
                  icon: null,
                  btn: "bg-slate-700 text-white hover:bg-slate-600",
                  label: `Sign in with ${provider.name}`,
                };
                return (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                    className={`w-full flex items-center justify-center rounded-md py-3 px-4 font-medium transition-colors ${cfg.btn}`}
                  >
                    <span className="flex items-center">
                      {cfg.icon}
                      {cfg.label}
                    </span>
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
