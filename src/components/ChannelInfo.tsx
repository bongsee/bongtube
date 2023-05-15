import React from "react"
import { useQuery } from "@tanstack/react-query"
import { useYoutubeApi } from "../contexts/youtubeApiContext"

type ChannelInfoProps = {
  id: string
  name: string
}

function ChannelInfo({ id, name }: ChannelInfoProps) {
  const { youtube } = useYoutubeApi()
  const {
    isLoading,
    error,
    data: channelInfo,
  } = useQuery(["channel", id], () => youtube.fetchChannelDetails(id))
  console.log(channelInfo)
  const thumbnails = channelInfo?.snippet.thumbnails
  return (
    <div>
      {thumbnails && <img src={thumbnails.default.url} alt={name} />}
      <p>{name}</p>
    </div>
  )
}

export default ChannelInfo
