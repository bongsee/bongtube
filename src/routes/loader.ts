// import Youtube from "../apis/youtube"
// import { LoaderFunctionArgs } from "react-router-dom"

// export const homePageLoader = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(async () => {
//       try {
//         const data = await new Youtube().search()
//         resolve(data)
//       } catch (err) {
//         reject("fail to load hot videos at loader function")
//       }
//     }, 500)
//   })
// }

// export const resultsPageLoader = async ({ request }: LoaderFunctionArgs) => {
//   const url = new URL(request.url)
//   const keyword = url.searchParams.get("search_query") || undefined
//   return new Promise((resolve, reject) => {
//     setTimeout(async () => {
//       try {
//         const data = await new Youtube().search(keyword)
//         resolve(data)
//       } catch (err) {
//         reject("fail to search videos at loader function")
//       }
//     }, 500)
//   })
// }

// export const watchPageLoader = async ({ params }: LoaderFunctionArgs) => {
//   const { id } = params
//   // API Call : Video Details
//   return null
// }
