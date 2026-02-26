// Types adapted from https://docs.jsonresume.org/developers#custom-type-definitions

// types/resume.ts
export interface Resume {
  basics: Basics;
  work?: Work[];
  education?: Education[];
  skills?: Skill[];
  volunteer?: Volunteer[];
  awards?: Award[];
  certifications?: Certification[];
  publications?: Publication[];
  languages?: Language[];
  interests?: Interest[];
  references?: Reference[];
  projects?: Project[];
}

export interface Basics {
  name: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  nationality?: string;
  location?: Location;
  profiles?: Profile[];

  media?: Media[];
}

export interface Location {
  address?: string;
  postalCode?: string;
  city?: string;
  countryCode?: string;
  region?: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Work {
  name?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string | "Present";
  summary?: string;
  highlights?: Highlight[];

  // Custom tag to filter and search skills
  tags?: Tag[];
  media?: Media[];
  importance?: Importance;
}

export interface Education {
  institution?: string;
  url?: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
  score?: string;
  courses?: string[];
  importance?: Importance;
}

export interface Skill {
  name?: string;
  level?: string;
  keywords?: string[];
  importance?: Importance;
}

export interface Volunteer {
  organization?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: Highlight[];

  // Custom tag to filter and search skills
  tags?: Tag[];
  media?: Media[];
  importance?: Importance;
}

export interface Award {
  title?: string;
  date?: string;
  awarder?: string;
  summary?: string;
}

export interface Certification {
  name: string;
  date?: string;
  issuer?: string;
  url?: string;

  tags?: Tag[];
  importance?: Importance;
}

export interface Publication {
  name?: string;
  publisher?: string;
  releaseDate?: string;
  url?: string;
  summary?: string;

  // Custom tag to filter and search skills
  tags?: string[];
  importance?: Importance;
}

export interface Language {
  language?: string;
  fluency?: string;
}

export interface Interest {
  name?: string;
  keywords?: string[];
  importance?: Importance;
}

export interface Reference {
  name?: string;
  reference?: string;
}

export interface Project {
  name?: string;
  description?: string;
  highlights?: Highlight[];
  keywords?: string[];
  startDate?: string;
  endDate?: string | "Present";
  url?: string;
  roles?: string[];
  entity?: string;
  type?: string;

  // Custom tag to filter and search skills
  media?: Media[];
  tags?: Tag[];
  importance?: Importance;
}

export interface Highlight {
  highlight: string;
  tags?: Tag[];
  importance?: Importance;
}

export type MediaLink = {
  type: "link";
  url: string;
};

export type MediaFile = {
  type: "file";
  path: string;
};

export type MediaPreview = {
  //html iframe
  type: "preview";
  url: string;
};
export type Media = MediaLink | MediaFile | MediaPreview;

export type Tag = string;

type ToInclude = "Always Include" | "Always Exclude" | "Optional";

type Priority = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Importance {
  toInclude?: ToInclude; // Always default to not include
  priority?: Priority;
  omitKeys?: string[];
  includeIn?: includeIn[]; // Sections to include this item in, e.g. ["work", "education"]
}

type includeIn =
  | "Backend"
  | "Frontend"
  | "Full Stack"
  | "Algo"
  | "Data Science and Machine Learning"
  | "Other";
