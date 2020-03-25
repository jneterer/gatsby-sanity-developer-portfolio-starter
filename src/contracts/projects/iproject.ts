import { ITag } from "../tags/tag/itag";

export interface IProject {
  _id: string;
  title: string;
  description: string;
  tags: ITag[];
  slug: {
    current: string;
  };
}