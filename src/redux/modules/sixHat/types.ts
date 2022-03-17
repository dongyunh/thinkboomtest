export type ChatData = {
  nickname: string | null;
  message: string | null;
};

export type ChatHistoryType = ChatData[];

export type SixHatState = {
  currentPage: number;
  nickname: string | null;
  isAdmin: boolean;
  isSubmit: boolean;
  chatHistory?: ChatHistoryType;
};
