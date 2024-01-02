import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodbAdapter";

// Providers
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GitHubProvider({
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      clientId: process.env.GITHUB_CLIENT_ID,
      style:{
        bg:"black",
        text:"white"
      }
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      style:{
        bg:"blue",
        text:"white",
      }
    }),
    GoogleProvider({
      clientId:proces.env.DISCORD_CLIENT_ID,
      clienSecret:process.env.DISCORD_CLIENT_SECRET,
      style:{
        bg:"red",
        text:"white",
      }
    })
  ],
};

export default NextAuth(authOptions);
