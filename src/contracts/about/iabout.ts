export interface IAbout {
  title: string;
  description: string;
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
}