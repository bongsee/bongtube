import React from "react"
import VideoList from "../components/VideoList"
import { Video } from "../types/videos"
import { useYoutubeApi } from "../contexts/youtubeApiContext"
import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"

function Home() {
  const { youtube } = useYoutubeApi()
  const {
    isLoading,
    error,
    data: hotVideos,
  } = useQuery<Video[], AxiosError>(["videos", "hot"], () => youtube.search())

  return <VideoList videos={hotVideos!} />
}

export default Home

// videoId : hotVideos.items[index].id
// snippet : hotVideos.items[index].snippet
// -> channelId, channelTitle, title, thumbnails.medium.url/width/height, publishedAt
