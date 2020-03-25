import { ITag } from "./tag/itag";

export interface IGetTagsResponse {
  allSanityTag: {
    nodes: ITag[];
  }
}