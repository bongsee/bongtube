import { useState, FormEvent, ChangeEvent, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { BsYoutube, BsSearch } from "react-icons/bs"

function SearchHeader() {
  const [searchText, setSearchText] = useState<string>("")
  const navigate = useNavigate()

  // navigating 시 검색어가 있으면 검색어를 검색창에 표시
  const location = useLocation()
  const searchTerm = location.state?.searchText
  useEffect(() => {
    console.log("[useEffect] has been called")
    setSearchText(searchTerm || "")
  }, [searchTerm])

  const searchFormSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/results?search_query=${searchText}`, { state: { searchText } })
  }
  const searchInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  return (
    <header>
      <Link to="/">
        <BsYoutube />
        <h1>Bongtube</h1>
      </Link>
      <form onSubmit={searchFormSubmitHandler}>
        <input
          value={searchText}
          onChange={searchInputChangeHandler}
          placeholder="동영상을 찾아보세요."
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </header>
  )
}

export default SearchHeader
