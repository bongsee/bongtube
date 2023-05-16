import { rest } from "msw"
import hotVideos from "./data/hot.json"
import searchedVideos from "./data/search.json"

export const handlers = [
  rest.get("https://www.googleapis.com/youtube/v3/videos", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(hotVideos))
  }),
  rest.get("https://www.googleapis.com/youtube/v3/search", (req, res, ctx) => {
    if (req.url.search.includes("q=")) {
      return res(ctx.status(200), ctx.json(searchedVideos))
    } else {
      return res(ctx.status(200), ctx.json(hotVideos))
    }
  }),
]
