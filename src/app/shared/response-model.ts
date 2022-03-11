import { ResponseVidInt } from "./response-vid-model"

export interface ResponseInt{
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items:ResponseVidInt[]
}
