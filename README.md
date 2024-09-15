# Piyush Garg

### Free Open Source BootCamp
This repository is a part of "Free Open Source BootCamp". Checkout [Open Source Bootcamp Playlist on Youtube.](https://www.youtube.com/playlist?list=PLinedj3B30sAT6CotNj0iffhRV89SkNK9)

### Setting up Locally

1. Copy the `.env.example` to `.env.local`

```bash
cp .env.example .env.local
```

2. Install Packages via yarn

```bash
yarn install
```

3. Run the Next.JS Development Server

```bash
yarn dev
```

### Setting Up the Project
[Click here](https://www.awesomescreenshot.com/video/18181026?key=45623fef0318912e62b9aacee5038999) to view the video tutorial which will teach you step by step on how to set up this project 

### Repo Activity

![Activity](https://repobeats.axiom.co/api/embed/53ac5d73666adb61764d0945fa9df15ccdc336ea.svg "Repobeats analytics image")

4. Set up DISCORD credentials
-> Go to https://discord.com/developers/applications
-> Create a new Apllication by clicking on New Application.
-> Open newly created Application.
-> On the left side tab. Click on the OAuth2 then General tab.
-> Copy the CLIENT ID and CLIENT SECRET.

5. Set up GITHUB credentials
-> Go to your github profile
-> Click your profile photo, then click Settings.
-> In the left sidebar, click  Developer settings.
-> In the left sidebar, click OAuth apps.
-> Click New OAuth App.
-> In "Homepage URL", type the full URL to your app's website (e.g http://localhost:3000)
-> In "Authorization callback URL", type the callback URL of your app. (e.g http://localhost:3000/auth/github/callback)
-> click Enable Device Flow
-> Click Register application.
-> Copy Client Id and Client Secret.

6. Set up SPREADSHEET Credential
-> [Click here] https://dev.to/calvinpak/how-to-read-write-google-sheets-with-react-193l
-> From the Credential file to .env.local file
    -> Copy the client_email to CLIENT_EMAIL.
    -> Copy the private_key to PRIVATE_KEY.
    -> SpreadSheet Id will look like this 1peDO-4gyM7dSRboPf7bH2oCQ0iBFYsa-m8lmvtuFMxo. get it from the url of spreadsheet.
