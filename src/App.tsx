import "./App.css"

import { RouterProvider } from "react-router-dom"

import router from "./routes/router"

console.log("[App.tsx] : has been loaded")

if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./mocks/browser")
  console.log("[MSW] : before start")
  worker.start()
  console.log("[MSW] : after start")
}

function App() {
  console.log("[App.tsx] : has been rendered")
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
