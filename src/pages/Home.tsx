/* eslint-disable @typescript-eslint/no-non-null-assertion */
import VideoList from "../components/VideoList"
import { useYoutubeApi } from "../contexts/youtubeApiContext"
import { useQuery } from "@tanstack/react-query"

function Home() {
  const { youtube } = useYoutubeApi()
  const {
    isLoading,
    // error,
    data: hotVideos,
  } = useQuery(["videos", "hot"], () => youtube.fetchHotVideos(), {
    staleTime: 1000 * 60 * 1,
  })
  return <>{<VideoList videos={hotVideos!} isLoading={isLoading} />}</>
}

export default Home
