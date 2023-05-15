import React from "react"
import { useLocation } from "react-router-dom"
import ChannelInfo from "../components/ChannelInfo"
import RelatedVideos from "../components/RelatedVideos"

function Watch() {
  const {
    state: { video },
  } = useLocation()

  const { title, channelId, channelTitle } = video.snippet
  console.log(channelId)

  return (
    <section>
      <article>
        <iframe
          id="player"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
        />
        <h2>{title}</h2>
        <ChannelInfo id={channelId} name={channelTitle} />
      </article>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  )
}

export default Watch
