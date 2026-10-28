export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type ModuleId = 'apex-basics' | 'soql' | 'dml' | 'triggers' | 'lwc' | 'integrations';
export type LessonStatus = 'locked' | 'available' | 'in-progress' | 'completed';
export type ChallengeStatus = 'not-started' | 'in-progress' | 'completed' | 'skipped';

export interface ContentBlock {
  type: 'explanation' | 'example' | 'note' | 'warning' | 'tip' | 'exercise';
  title?: string;
  text: string;
  code?: string;
  output?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface TestCase {
  id: string;
  description: string;
  pattern: string; // regex pattern to check in submitted code
  errorMessage: string;
}

export interface Challenge {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  instructions: string[];
  starterCode: string;
  hints: string[];
  solution: string;
  solutionExplanation: string;
  testCases: TestCase[];
  difficulty: Difficulty;
}

export interface Lesson {
  id: string;
  moduleId: ModuleId;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  duration: number;
  difficulty: Difficulty;
  tags: string[];
  content: ContentBlock[];
  quiz: QuizQuestion[];
  challengeId?: string;
  prerequisites: string[];
  learningObjectives: string[];
}

export interface Module {
  id: ModuleId;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: string[];
  estimatedHours: number;
}

export interface UserProgress {
  completedLessons: string[];
  completedChallenges: string[];
  quizScores: Record<string, number>;
  challengeSubmissions: Record<string, string>;
  xp: number;
  streakDays: number;
  lastVisit: string;
  badges: string[];
}

export interface Mission {
  id: string;
  title: string;
  company: string;
  description: string;
  scenario: string;
  requirements: string[];
  difficulty: Difficulty;
  skills: string[];
  estimatedHours: number;
  starterCode?: string;
  solution?: string;
}

export interface SOQLRecord {
  type: string;
  fields: Record<string, string | number | boolean | null>;
}

export interface DebugScenario {
  id: string;
  title: string;
  description: string;
  brokenCode: string;
  errorMessage: string;
  hints: string[];
  fixedCode: string;
  explanation: string;
  bugType: 'syntax' | 'logic' | 'soql' | 'dml' | 'null-pointer' | 'governor-limit';
}
