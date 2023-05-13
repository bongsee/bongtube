import React from "react"
import { useLoaderData } from "react-router-dom"
import { Video } from "../types/videos"
import VideoList from "../components/VideoList"

function Results() {
  const searchedVideos = useLoaderData() as Video[]
  console.log(searchedVideos)
  return <VideoList videos={searchedVideos} />
}

export default Results
