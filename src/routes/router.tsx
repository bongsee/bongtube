import { createBrowserRouter } from "react-router-dom"

import Root from "../pages/Root"
import HomePage from "../pages/Home"
import ResultsPage from "../pages/Results"
import WatchPage from "../pages/Watch"
import NotFound from "../pages/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: async () => {
          // API Call : Trending Videos
          return []
        },
      },
      {
        path: "/results",
        element: <ResultsPage />,
        loader: async ({ request }) => {
          const url = new URL(request.url)
          const searchTerm = url.searchParams.get("search_query")
          // API Call : Search Videos
          return searchTerm
        },
      },
      {
        path: "/watch/:id",
        element: <WatchPage />,
        loader: async ({ params }) => {
          // API Call : Video Details
          return []
        },
      },
    ],
  },
  /**
   * @todo 매치되는 경로가 없을 때 Home으로 redirect 시키는 것도 고려
   */
  {
    path: "*",
    element: <NotFound />,
  },
])

export default router
