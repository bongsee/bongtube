/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useLocation } from "react-router-dom"
import VideoList from "../components/VideoList"
import { useYoutubeApi } from "../contexts/youtubeApiContext"
import { useQuery } from "@tanstack/react-query"

function Results() {
  const { youtube } = useYoutubeApi()

  // url에서 search_query 정보 추출
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const keyword = queryParams.get("search_query")!
  /**
   * @todo 유저가 url을 조작해서 들어오는 경우에 대한 처리 필요
   * @memo 검색어를 state로 넘겨주면 url을 통한 검색은 처리하지 못함. 따라서 위와 같은 방식으로 변경.
   */

  const {
    isLoading,
    // error,
    data: searchedVideos,
  } = useQuery(
    ["videos", keyword],
    () => youtube.fetchVideosByKeyword(keyword),
    {
      refetchOnWindowFocus: false,
    }
  )
  return <>{<VideoList videos={searchedVideos!} isLoading={isLoading} />}</>
}

export default Results
