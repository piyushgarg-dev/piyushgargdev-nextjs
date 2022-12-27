// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const path = require("path");
const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: path.resolve("./credentials/credentials.json"),
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

export default async function handler(req, res) {
  if (req.method == "POST") {
    const {
      name,
      email,
      message,
      isAuthenticated = false,
      authenticatedUserName,
      authenticatedUserEmail,
      authenticatedUserImageUrl,
    } = req.body;
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: `${process.env.NODE_ENV}!A:I`,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [
            Date.now(),
            new Date().toLocaleString(undefined, { timeZone: "Asia/Kolkata" }),
            name,
            email,
            message,
            isAuthenticated,
            authenticatedUserName,
            authenticatedUserEmail,
            authenticatedUserImageUrl,
          ],
        ],
      },
    });

    return res.json({ message: "success" });
  }
  return res.status(400).json({ error: "Invalid Req Method" });
}
