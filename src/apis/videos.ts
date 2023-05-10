import axios from "axios"
import { Videos } from "../types/videos"

/**
 * @todo 추후 실제 API 서버로 연결 예정
 */

export const getHotVideos = async () => {
  console.log(`[getHotVideos] has been called`)
  const response = await axios.get<Videos>("/videos")
  console.log(`[getHotVideos] data: `, response.data)
  return response.data
}
