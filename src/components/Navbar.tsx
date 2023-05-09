import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/watch">Watch</Link> |{" "}
      <Link to="/results">Results</Link>
    </>
  )
}

export default Navbar
