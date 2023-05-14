import "./App.css"
import { Outlet } from "react-router-dom"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { YoutubeApiProvider } from "./contexts/youtubeApiContext"
import SearchHeader from "./components/SearchHeader"

console.log("[App.tsx] : has been loaded")

if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./mocks/browser")
  console.log("[MSW] : before start")
  worker.start()
  console.log("[MSW] : after start")
}

const queryClient = new QueryClient()

function App() {
  console.log("[App.tsx] : has been rendered")
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <YoutubeApiProvider>
          <Outlet />
        </YoutubeApiProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
