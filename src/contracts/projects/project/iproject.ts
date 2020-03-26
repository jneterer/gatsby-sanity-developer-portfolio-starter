import { ITag } from "../../tags/tag/itag";

export interface IProject {
  _id: string;
  title: string;
  description: string;
  tags: ITag[];
  mainImage: {
    asset: {
      fluid: {
        base64: string;
        aspectRatio: number;
        src: string;
        srcSet: string;
        srcWebp: string;
        srcSetWebp: string;
        sizes: string;
      };
    };
  };
  slug: {
    current: string;
  };
}