import React from "react"
import { useLoaderData } from "react-router-dom"
import VideoList from "../components/VideoList"
import { Video } from "../types/videos"

function Home() {
  const hotVideos = useLoaderData() as Video[]
  return <VideoList videos={hotVideos} />
}

export default Home

// videoId : hotVideos.items[index].id
// snippet : hotVideos.items[index].snippet
// -> channelId, channelTitle, title, thumbnails.medium.url/width/height, publishedAt
