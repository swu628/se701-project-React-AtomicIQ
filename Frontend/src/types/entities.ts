export interface Badge {
  id: number;
  icon: string;
  name: string;
  description: string;
}

export interface UserSession {
  username: string;
  password: string;
  avatar: string;
  badges: number[];
  level: number;
  progress: number;
}
