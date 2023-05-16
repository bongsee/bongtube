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
    if (searchText.trim() === "") return
    navigate(`/results?search_query=${searchText}`)
  }
  const searchInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  return (
    <header className="w-full flex p-4 mb-4 text-2xl border-b border-zinc-600">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Bongtube</h1>
      </Link>
      <form
        className="w-full flex justify-center"
        onSubmit={searchFormSubmitHandler}
      >
        <input
          value={searchText}
          onChange={searchInputChangeHandler}
          placeholder="동영상을 찾아보세요."
          className="w-7/12 p-2 bg-black text-gray-50 outline-none"
        />
        <button type="submit" className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  )
}

export default SearchHeader
