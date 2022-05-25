export interface CreateActivityParams {
    name: string;
    conclusion: string;
    startDate: string;
    endDate: string;
    facilityId: number;
    planId: number;
    activityResultId: number;
    activityStateId: number;
}
/*
    createdDate: string; //ngay hien tai
    facilityId: number;  //hoat dong cua co so nao
    planId: number;      //hoat dong cua ke hoach nao
*/

export interface UpdateActivityParams extends CreateActivityParams {}

export interface DeleteActivityParams {
    id: number;
}
