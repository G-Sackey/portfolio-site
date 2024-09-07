export interface Gallery {
  src: string;
}

export interface Project {
  name: string;
  src: string;
  gallery: Gallery[];
}

export interface CardInterface{
  name: string;
  src: string;
  role: string;
  mail?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  pinterest?: string;
  phoneNumber?: string;
  twitter?: string;
  instagram?: string;
  whatsapp?: string;
  bio: string;
}