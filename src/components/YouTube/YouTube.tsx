'use client'

import { useEffect, useState } from 'react';

// Define types for video data
type VideoSnippet = {
  title: string;
  description: string;
  thumbnails: {
    medium: {
      url: string;
    };
  };
};

type VideoStatistics = {
  viewCount: string;
};

type Video = {
  id: string;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
};

export default function YouTubePage() {
  const [videoData, setVideoData] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  const maxResults = 9; // Number of videos to fetch

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        // Fetch the latest videos from your YouTube channel using the search API
        const videoRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
        );
        const videoData = await videoRes.json();

        if (videoData.items && videoData.items.length > 0) {
          // Fetch details for each video
          const videoDetailsPromises = videoData.items.map(async (item: { id: { videoId: string }; snippet: VideoSnippet }) => {
            const videoId = item.id.videoId;
            const videoRes = await fetch(
              `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`
            );
            const videoDetailData = await videoRes.json();
            return videoDetailData.items[0];
          });

          const videos = await Promise.all(videoDetailsPromises);
          setVideoData(videos as Video[]);
        } else {
          setError('No videos found');
        }
      } catch (err) {
        setError('Failed to fetch video data');
      }
    };

    fetchVideoData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (videoData.length === 0) {
    return <div>Loading videos...</div>;
  }

  return (
    <div className="youtube-page">
      <h1 className="text-3xl font-bold text-center my-6">Latest Videos from My Channel</h1>
      <div className="video-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map((video) => {
          const truncatedDescription = video.snippet.description.slice(0, 200) + (video.snippet.description.length > 200 ? '...' : '');
          return (
            <div key={video.id} className="video-card p-4 bg-white rounded-lg shadow-md">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="video-info mt-4">
                <h3 className="text-xl font-bold">{video.snippet.title}</h3>
                <p className="text-gray-600">{truncatedDescription}</p>
                <p className="mt-2 text-sm text-white rounded bg-[#7C4EE4] p-3">
                  Views: {video.statistics.viewCount}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}