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
  correctQuiz: number;
}
