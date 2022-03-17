export type ChatData = {
  nickname: string;
  message: string;
};

export type ChatHistoryType = ChatData[];

export type SixHatState = {
  currentPage: number;
  nickname: string | null;
  isAdmin: boolean;
  isSubmit: boolean;
  chatHistory?: ChatHistoryType;
};
