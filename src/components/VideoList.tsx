import React from "react"
import { Video } from "../types/videos"
import { getRelativeTime } from "../utils/getRelativeTime"

interface VideoListProps {
  videos: Video[]
}

function VideoList({ videos }: VideoListProps) {
  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id as string}>
          <img
            src={video.snippet.thumbnails.medium.url}
            width={video.snippet.thumbnails.medium.width}
            height={video.snippet.thumbnails.medium.height}
            alt="비디오 썸네일 이미지"
          />
          <h2>{video.snippet.title}</h2>
          <h3>{video.snippet.channelTitle}</h3>
          <p>{getRelativeTime(video.snippet.publishedAt)}</p>
        </li>
      ))}
    </ul>
  )
}

export default VideoList
