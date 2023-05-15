import React from "react"
import VideoList from "../components/VideoList"
import { useYoutubeApi } from "../contexts/youtubeApiContext"
import { useQuery } from "@tanstack/react-query"

function Home() {
  const { youtube } = useYoutubeApi()
  const {
    isLoading,
    error,
    data: hotVideos,
  } = useQuery(["videos", "hot"], () => youtube.fetchHotVideos(), {
    staleTime: 1000 * 60 * 1,
  })

  return <>{hotVideos && <VideoList videos={hotVideos} />}</>
}

export default Home

// videoId : hotVideos.items[index].id
// snippet : hotVideos.items[index].snippet
// -> channelId, channelTitle, title, thumbnails.medium.url/width/height, publishedAt
