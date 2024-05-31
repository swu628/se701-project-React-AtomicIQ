export interface Badge {
  id: number;
  icon: string;
  name: string;
  description: string;
}

export interface UserSession {
  username: string;
  password: string;
  badges: number[];
  level: number;
  progress: number;
  avatar: string;
  questionPoints: {
    correctQuestions: number;
    incorrectQuestions: number;
    totalQuestions: number;
    consecutiveQuestions: number;
  };
  quizPoints: {
    numFlashcard: number;
    numWordle: number;
  };
  latestQuizResults: {
    quizType: string;
    correct: number;
    incorrect: number;
    skipped: number;
  }[];
}
