export interface SubDzikr {
  arabic: string;
  latin: string;
  translation: string;
}

export interface Dzikr {
  title: string;
  repeat: number;
  tags: string[];
  children: SubDzikr[];
}
