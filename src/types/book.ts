export type Book = {
  id: string;
  title: string;
  author: string[] | undefined;
  summary: string | undefined;
  image: string | undefined;
  link: string | undefined;
  //genre: tbd
  //rating - needs util function to grab it from db
};

type IndustryIdentifier = {
  type: string;
  identifier: string;
};

type ReadingModes = {
  text: boolean;
  image: boolean;
};

type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

type VolumeInfo = {
  title: string;
  subtitle?: string;
  authors?: string[];
  publishedDate?: string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes?: ReadingModes;
  pageCount?: number;
  printType?: string;
  categories?: string[];
  maturityRating?: string;
  allowAnonLogging?: boolean;
  contentVersion?: string;
  panelizationSummary?: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks?: ImageLinks;
  language?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
};

export type BookItem = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
};

export type BookResponse = {
  kind: string;
  totalItems: number;
  items: BookItem[];
};
