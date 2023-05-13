export interface Videos {
  kind: string
  etag: string
  items: Video[]
  nextPageToken: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

export interface Video {
  kind: string
  etag: string
  id:
    | string
    | {
        kind: string
        videoId: string
      }
  snippet: VideoSnippet
}

interface VideoSnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: VideoThumbnails
  channelTitle: string
  categoryId: string
  liveBroadcastContent: string
  localized: {
    title: string
    description: string
  }
  tags?: string[]
  defaultLanguage?: string
  defaultAudioLanguage?: string
}

interface VideoThumbnails {
  default: VideoThumbnail
  medium: VideoThumbnail
  high: VideoThumbnail
  standard: VideoThumbnail
  maxres: VideoThumbnail
}
interface VideoThumbnail {
  url: string
  width: number
  height: number
}
