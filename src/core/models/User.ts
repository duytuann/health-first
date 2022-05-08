export interface User {
  CreateDate?: string;
  CreateDateTick?: string;
  CreateUser?: string;
  Email?: string;
  FullName?: string;
  FullNameNoMark?: string;
  IsDelete?: boolean;
  LastUpdate?: string;
  LastUpdateTick?: string;
  Password?: string;
  PhoneNumber?: string;
  PositionId?: number;
  Sex?: number;
  UpdateUser?: string;
  UserID?: string;
  UserName?: string;
}
export interface UserToken {
  CountriesCode?: string;
  CreateDate?: string;
  ExpiredDate?: string;
  ID?: string;
  IpAddress?: string;
  IsRememberPassword?: boolean;
  Language?: string;
  TimeUpdateExpiredDateToDB?: string;
  Token?: string;
  UserID?: string;
  Username?: string;
}
