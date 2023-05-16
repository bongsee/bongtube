export interface Channels {
  kind: string
  etag: string
  items: Channel[]
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

export interface Channel {
  kind: string
  etag: string
  id: string
  snippet: ChannelSnippet
}

interface ChannelSnippet {
  title: string
  description: string
  customUrl: string
  publishedAt: string
  thumbnails: ChannelThumbnails
  localized: {
    title: string
    description: string
  }
  country: string
}

interface ChannelThumbnails {
  default: Thumbnail
  medium: Thumbnail
  high: Thumbnail
}

interface Thumbnail {
  url: string
  width: number
  height: number
}
