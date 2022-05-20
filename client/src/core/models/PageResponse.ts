export default interface PageResponse<T> {
  TotalSearch: number;
  PageSize: number;
  CurrentPage: number;
  data: T[];
}
