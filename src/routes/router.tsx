import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

import App from "../App"
import HomePage from "../pages/Home"
import ResultsPage from "../pages/Results"
import WatchPage from "../pages/Watch"
import NotFound from "../pages/NotFound"

const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="results" element={<ResultsPage />} />
      <Route path="watch/:id" element={<WatchPage />} />
    </Route>,
    <Route path="*" element={<NotFound />} />,
  ])
)

export default Router
