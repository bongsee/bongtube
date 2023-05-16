import React from "react"
import { Video } from "../types/videos"
import VideoCard from "./VideoCard"
import VideoCardSkeleton from "./Skeleton/VideoCardSkeleton"

interface VideoListProps {
  videos: Video[]
  isLoading?: boolean
}

function VideoList({ videos, isLoading }: VideoListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
      {isLoading
        ? Array(25)
            .fill(0)
            .map(() => <VideoCardSkeleton />)
        : videos?.map((video) => (
            <VideoCard key={video.id as string} video={video} />
          ))}
    </ul>
  )
}

export default VideoList
