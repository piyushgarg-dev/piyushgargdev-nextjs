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

### Optional Setup
Database Feature
If you want to utilize the database feature, follow these steps:

Go to MongoDB Atlas Cloud or set up a local MongoDB instance.

Copy the MongoDB connection URL, which looks like and update to :
```bash
MONGODB_URI: mongodb+srv://admin:<password>@cluster0.oeqvtk8.mongodb.net/?retryWrites=true&w=majority
Replace <password> with your actual MongoDB password and make sure to adjust other parts of the URL as needed.
```

### For GitHub and Discord Sign-In Feature
If you want to enable GitHub and Discord sign-in features in the development environment, please follow the instructions in this [docs](https://mattermost.com/blog/add-google-and-github-login-to-next-js-app-with-nextauth/) .

Make sure to update the following environment variables in your .env.local file:

For GitHub:
```bash
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```


For Discord:
```bash
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret
```


### Repo Activity

![Activity](https://repobeats.axiom.co/api/embed/53ac5d73666adb61764d0945fa9df15ccdc336ea.svg "Repobeats analytics image")
