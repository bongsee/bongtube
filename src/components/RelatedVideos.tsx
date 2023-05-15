import React from "react"
import { useQuery } from "@tanstack/react-query"
import { useYoutubeApi } from "../contexts/youtubeApiContext"
import VideoCard from "./VideoCard"
import VideoCardSkeleton from "./Skeleton/VideoCardSkeleton"

type RelatedVideosProps = {
  id: string
}

function RelatedVideos({ id }: RelatedVideosProps) {
  const { youtube } = useYoutubeApi()

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related_videos", id], () => youtube.fetchRelatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  })
  return (
    <ul>
      {isLoading
        ? Array(25)
            .fill(0)
            .map(() => <VideoCardSkeleton type="list" />)
        : videos?.map((video) => {
            return isLoading ? (
              <VideoCardSkeleton type="list" />
            ) : (
              <VideoCard key={video.id as string} video={video} type="list" />
            )
          })}
    </ul>
  )
}

export default RelatedVideos
