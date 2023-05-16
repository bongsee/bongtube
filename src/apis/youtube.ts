import axios, { AxiosError } from "axios"
import { Videos } from "../types/videos"
import { AxiosInstance } from "axios"
import { Channels } from "../types/channel"

export default class Youtube {
  private httpClient: AxiosInstance
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
      },
    })
  }
  async fetchVideosByKeyword(keyword: string) {
    return this.httpClient
      .get<Videos>("/search", {
        params: {
          part: "snippet",
          maxResults: 25,
          q: keyword,
          type: "video",
        },
      })
      .then((res) =>
        res.data.items.map((item) => {
          // type guard
          if (typeof item.id === "string") {
            return item
          } else {
            return { ...item, id: item.id.videoId }
          }
        })
      )
      .catch((err: AxiosError) => {
        alert(
          `[검색 데이터]를 불러오는데 실패했습니다.\nerror message: ${err.message}`
        )
      })
  }
  async fetchRelatedVideos(videoId: string) {
    return this.httpClient
      .get<Videos>("/search", {
        params: {
          part: "snippet",
          regionCode: "kr",
          type: "video",
          relatedToVideoId: videoId,
          maxResults: 25,
        },
      })
      .then((res) =>
        res.data.items.map((item) => {
          // type guard
          if (typeof item.id === "string") {
            return item
          } else {
            return { ...item, id: item.id.videoId }
          }
        })
      )
      .catch((err: AxiosError) => {
        alert(
          `[연관된 비디오]를 불러오는데 실패했습니다.\nerror message: ${err.message}`
        )
      })
  }
  async fetchHotVideos() {
    return this.httpClient
      .get<Videos>("/videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
          regionCode: "kr",
        },
      })
      .then((res) => res.data.items)
      .catch((err: AxiosError) => {
        alert(
          `[핫 트렌드 비디오]를 불러오는데 실패했습니다.\nerror message: ${err.message}`
        )
      })
  }
  async fetchChannelDetails(channelId: string) {
    return this.httpClient
      .get<Channels>("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      })
      .then((res) => res.data.items[0])
      .catch((err: AxiosError) => {
        alert(
          `[채널 정보]를 불러오는데 실패했습니다.\nerror message: ${err.message}`
        )
      })
  }
}
