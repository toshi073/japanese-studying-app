
export enum AppView {
  DASHBOARD = 'dashboard',
  SCANNER = 'scanner',
  LIBRARY = 'library',
  WRITING = 'writing',
  AGENT = 'agent',
  KANJI_TEST = 'kanji_test',
  IMPORTER = 'importer'
}

export interface ScannedLesson {
  id: string;
  originalImage: string;
  title: string;
  category?: string;
  difficulty?: 'N1' | 'N2';
  transcription: string;
  translation: string;
  explanations: {
    phrase: string;
    reading: string;
    meaning: string;
    context: string;
  }[];
  exercises: {
    question: string;
    answer: string;
    options: string[];
  }[];
}

export interface WritingCorrection {
  original: string;
  corrected: string;
  explanation: string; // In Spanish
  politenessLevel: string;
  audioData?: string; // PCM base64
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  audio?: string;
}
