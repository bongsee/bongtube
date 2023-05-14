import React from "react"

import { getRelativeTime } from "../utils/getRelativeTime"
import { Video } from "../types/videos"

interface VideoCardProps {
  video: Video
}

function VideoCard({ video }: VideoCardProps) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet
  return (
    <li>
      <img
        className="w-full"
        src={thumbnails.medium.url}
        width={thumbnails.medium.width}
        height={thumbnails.medium.height}
        alt="비디오 썸네일 이미지"
      />
      <h2 className="font-semibold my-2 line-clamp-2">{title}</h2>
      <h3 className="text-sm opacity-80">{channelTitle}</h3>
      <p className="text-sm opacity-80">{getRelativeTime(publishedAt)}</p>
    </li>
  )
}

export default VideoCard
