export interface ResultResponse<T> {
    responseCode: string;
    responseMessage: string;
    responseData: T;
}
