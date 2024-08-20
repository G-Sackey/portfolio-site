export interface Gallery {
  src: string;
}

export interface Project {
  name: string;
  src: string;
  gallery: Gallery[];
}
