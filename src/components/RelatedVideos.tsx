import { useQuery } from "@tanstack/react-query"
import React from "react"
import { useYoutubeApi } from "../contexts/youtubeApiContext"
import VideoCard from "./VideoCard"

type RelatedVideosProps = {
  id: string
}

function RelatedVideos({ id }: RelatedVideosProps) {
  const { youtube } = useYoutubeApi()

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related_videos", id], () => youtube.fetchRelatedVideos(id))

  return (
    <ul>
      {videos?.map((video) => (
        <VideoCard key={video.id as string} video={video} type="list" />
      ))}
    </ul>
  )
}

export default RelatedVideos
