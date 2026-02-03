
export enum Grade {
  THIRD = 3,
  FOURTH = 4,
}

export enum AppState {
  SELECTING = 'selecting',
  GRADE_SELECTION = 'grade_selection',
  READING = 'reading',
  QUIZZING = 'quizzing',
  SUMMARIZING = 'summarizing',
  RESULTS = 'results',
  PARENT_DASHBOARD = 'parent_dashboard',
}

export enum QuestionCategory {
  LITERAL = 'Literal',
  SEQUENCING = 'Detalles y Secuencia',
  VOCABULARY = 'Vocabulario en Contexto',
  MAIN_IDEA = 'Idea Principal y Tema',
  INFERENCE = 'Inferencia y Predicción',
  CHARACTER = 'Personajes y Ambiente',
}

export interface Question {
  id: string;
  category: QuestionCategory;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export interface Story {
  id:string;
  title: string;
  author: string;
  coverImage: string;
  content: string;
  wordCount: number;
  level: string;
  questions: { [key in QuestionCategory]?: Question[] };
}

export interface UserAnswer {
  questionId: string;
  answer: string;
  hintUsed?: boolean;
}

export interface AnswerTiming {
  questionId: string;
  duration: number; // in ms
}

export interface PageTiming {
  pageIndex: number;
  duration: number; // in ms
  wordCount: number;
}

export interface Attempt {
  id: string; // timestamp
  grade: Grade;
  readingDuration: number;
  pageTimings: PageTiming[];
  answers: UserAnswer[];
  answerTimings: AnswerTiming[];
  score: number;
  questions: Question[];
  shuffledOptionsPerQuestion: { [questionId: string]: string[] };
  studentSummary?: string;
  summaryFeedback?: string;
}

export interface StoryStats {
  locked: boolean;
  attempts: Attempt[];
}

export interface AllStoryStats {
  [storyId: string]: StoryStats;
}

export interface ReadingSession {
  storyId: string;
  grade: Grade;
  startTime: number;
  currentPageIndex: number;
  pageTimings: PageTiming[];
  pageStartTime: number;
}
