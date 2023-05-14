import { createContext, useContext } from "react"
import Youtube from "../apis/youtube"

// types
interface YoutubeApiProviderProps {
  children: React.ReactNode
}
export interface YoutubeApi {
  youtube: Youtube
}

const youtubeApiContext = createContext<YoutubeApi | null>(null)

const youtube = new Youtube()

export const YoutubeApiProvider = ({ children }: YoutubeApiProviderProps) => {
  return (
    <youtubeApiContext.Provider value={{ youtube }}>
      {children}
    </youtubeApiContext.Provider>
  )
}

export const useYoutubeApi = () => {
  return useContext(youtubeApiContext)
}
