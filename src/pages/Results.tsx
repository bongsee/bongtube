import React from "react"
import { useLocation, useParams } from "react-router-dom"

function Results() {
  // useLoaderData hook
  const location = useLocation()
  console.dir(location)
  return <div>{location.state?.searchText || "안뇽"}</div>
}

export default Results
