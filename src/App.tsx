import "./App.css"
import { RouterProvider } from "react-router-dom"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import router from "./routes/router"
import { YoutubeApiProvider } from "./contexts/youtubeApiContext"

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
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <YoutubeApiProvider>
          <RouterProvider router={router} />
        </YoutubeApiProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
