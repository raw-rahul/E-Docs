export interface Document {
  name: string;
  required: boolean;
  maxSizeKB?: number;
  formats?: string[];
}

export interface DocSection {
  sectionName: string;
  documents: Document[];
}

export interface Exam {
  id: string;
  name: string;
  shortName: string;
  description: string;
  emoji: string;
  iconBg: string;
  docSections: DocSection[];
}

export type Step = 1 | 2 | 3;

export interface UploadedFile {
  docName: string;
  file: File | null;
  compressed: boolean;
  originalSizeKB?: number;
  compressedSizeKB?: number;
}