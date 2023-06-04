import axios from "axios";

const discordApiInstace = axios.create({
  baseURL: "https://discord.com/api",
  headers: {
    "Accept-Encoding": "*",
  },
});

export default async function handler(req, res) {
  if (req.method.toLowerCase() === "post") {
    const DISCORD_CLEINT_SECRET = process.env.DISCORD_CLIENT_SECRET;
    const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
    const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
    const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;
    const DISCORD_OPEN_SOURCE__ROLE_ID =
      process.env.DISCORD_OPEN_SOURCE__ROLE_ID;

    if (
      !DISCORD_CLEINT_SECRET ||
      !DISCORD_CLIENT_ID ||
      !DISCORD_BOT_TOKEN ||
      !DISCORD_GUILD_ID ||
      !DISCORD_OPEN_SOURCE__ROLE_ID
    )
      return res.status(400).json({
        error: "DISCORD_CLIENT_SECRET or DISCORD_CLIENT_ID is not set",
      });

    const { code, redirect_uri } = req.body;
    if (!code || !redirect_uri)
      return res.status(400).json({ error: "code & redirect_uri is required" });

    const { data: tokenInfo } = await discordApiInstace.post(
      `/oauth2/token`,
      {
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLEINT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept-Encoding": "*",
        },
      }
    );

    if (!tokenInfo || !tokenInfo.access_token)
      return res.status(404).json({ error: "access_token not found" });

    const accessToken = tokenInfo.access_token;

    const { data: userInfo } = await discordApiInstace.get("/users/@me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!userInfo) return res.status(404).json({ error: "userInfo not found" });

    await discordApiInstace.put(
      `/guilds/${DISCORD_GUILD_ID}/members/${userInfo.id}`,
      {
        access_token: accessToken,
      },
      {
        headers: {
          Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        },
        responseType: "json",
      }
    );

    await discordApiInstace.put(
      `/guilds/${DISCORD_GUILD_ID}/members/${userInfo.id}/roles/${DISCORD_OPEN_SOURCE__ROLE_ID}`,
      {},
      {
        headers: {
          Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        },
      }
    );

    return res.status(200).json({ message: "Done" });
  }

  return res.status(404).json({ error: "Invalid HTTP Method" });
}
