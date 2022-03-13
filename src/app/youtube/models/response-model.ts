import { ResponseVidInt, SearchResponseVidInt } from "./response-vid-model"

export interface ResponseInt{
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items:ResponseVidInt[]
}

export interface SearchResponseInt{
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items:SearchResponseVidInt[]
}
