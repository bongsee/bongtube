import { rest } from "msw"
import hotVideos from "../data/hotVides.json"

export const handlers = [
  rest.get("/videos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ title: "Mocked Title" }))
  }),
]
