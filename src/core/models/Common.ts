export interface HistoryLogItem {
  CreateDate?: string;
  FullName?: string;
  FuncId?: number;
  ID?: number;
  IP?: string;
  LogContent?: string;
  UserID?: number;
  UserName?: string;
}

export interface HistoryInterface {
  Object: HistoryLogItem[];
}
