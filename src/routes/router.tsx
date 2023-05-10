import { createBrowserRouter } from "react-router-dom"

import Root from "../pages/Root"
import HomePage from "../pages/Home"
import ResultsPage from "../pages/Results"
import WatchPage from "../pages/Watch"
import NotFound from "../pages/NotFound"

import { homePageLoader, resultsPageLoader, watchPageLoader } from "./loader"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homePageLoader,
      },
      {
        path: "/results",
        element: <ResultsPage />,
        loader: resultsPageLoader,
      },
      {
        path: "/watch/:id",
        element: <WatchPage />,
        loader: watchPageLoader,
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
