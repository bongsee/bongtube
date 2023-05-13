import axios from "axios"
import { Videos } from "../types/videos"
import { AxiosInstance } from "axios"

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
  async search(keyword?: string) {
    return keyword
      ? this._fetchVideosByKeyword(keyword)
      : this._fetchHotVideos()
  }
  private async _fetchHotVideos() {
    const response = await this.httpClient.get<Videos>("/videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
        regionCode: "kr",
      },
    })
    return response.data.items
  }
  private async _fetchVideosByKeyword(keyword: string) {
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
  }
}
