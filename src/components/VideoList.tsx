import React from "react"
import { Video } from "../types/videos"
import VideoCard from "./VideoCard"

interface VideoListProps {
  videos: Video[]
}

function VideoList({ videos }: VideoListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
      {videos?.map((video) => (
        <VideoCard key={video.id as string} video={video} />
      ))}
    </ul>
  )
}

export default VideoList
