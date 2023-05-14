import React from "react"
import { useLocation, useNavigation } from "react-router-dom"
import { Video } from "../types/videos"
import VideoList from "../components/VideoList"
import { useYoutubeApi } from "../contexts/youtubeApiContext"
import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"

function Results() {
  const { youtube } = useYoutubeApi()

  // url에서 search_query 정보 추출
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const keyword = queryParams.get("search_query") || undefined

  const {
    isLoading,
    error,
    data: searchedVideos,
  } = useQuery<Video[], AxiosError>(["videos", keyword], () =>
    youtube.search(keyword)
  )
  return <>{searchedVideos && <VideoList videos={searchedVideos} />}</>
}

export default Results
