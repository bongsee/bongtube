import { getHotVideos } from "../apis/videos"

export const homePageLoader = () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const data = await getHotVideos()
        resolve(data)
      } catch {
        reject("fail to load hot videos at loader function")
      }
    }, 300)
  })
}

export const resultsPageLoader = async ({ request }) => {
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get("search_query")
  // // API Call : Search Videos
  return null
}

export const watchPageLoader = async ({ params }) => {
  const { id } = params
  // API Call : Video Details
  return null
}
