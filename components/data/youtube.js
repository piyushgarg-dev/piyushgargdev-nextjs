const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

export const fetchYouTubeStats = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching YouTube stats:", error);
    return null;
  }
};

export const fetchYouTubeVideos = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=3`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return null;
  }
};
