import { ITag } from "../../tags/tag/itag";

export interface IProject {
  _id: string;
  title: string;
  description: string;
  githubUrl: string;
  siteUrl: string;
  _rawBody: {
    _key: string;
    _type: string;
    sanityChildren: {};
  };
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