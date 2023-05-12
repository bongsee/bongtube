import React from "react"
import { Outlet } from "react-router-dom"

import SearchHeader from "../components/SearchHeader"

function Root() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  )
}

export default Root
