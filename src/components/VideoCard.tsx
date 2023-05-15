import React from "react"

import { getRelativeTime } from "../utils/getRelativeTime"
import { Video } from "../types/videos"
import { useNavigate } from "react-router-dom"

interface VideoCardProps {
  video: Video
}

function VideoCard({ video }: VideoCardProps) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet

  const navigate = useNavigate()

  const onClickVideoCard = (e: React.MouseEvent<HTMLLIElement>) => {
    const videoId = e.currentTarget.id
    navigate(`/watch/${videoId}`, { state: { video } })
  }

  return (
    <li id={video.id as string} onClick={onClickVideoCard}>
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
