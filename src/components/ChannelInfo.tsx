import { useQuery } from "@tanstack/react-query"
import { useYoutubeApi } from "../contexts/youtubeApiContext"

type ChannelInfoProps = {
  id: string
  name: string
}

function ChannelInfo({ id, name }: ChannelInfoProps) {
  const { youtube } = useYoutubeApi()
  const {
    // isLoading,
    // error,
    data: channelInfo,
  } = useQuery(["channel", id], () => youtube.fetchChannelDetails(id), {
    staleTime: 1000 * 60 * 5,
  })
  console.log(channelInfo)
  const thumbnails = channelInfo?.snippet.thumbnails
  return (
    <div className="flex items-center mt-4 mb-8">
      {thumbnails && (
        <img
          className="w-10 h-10 rounded-full"
          src={thumbnails.default.url}
          alt={name}
        />
      )}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  )
}

export default ChannelInfo
