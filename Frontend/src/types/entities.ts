export interface BadgeData {
  badgeData: Badge[];
}

interface Badge {
  id: number;
  icon: string;
  name: string;
  description: string;
}
