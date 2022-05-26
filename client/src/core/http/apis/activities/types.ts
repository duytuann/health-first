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

export interface UpdateActivityParams extends CreateActivityParams {}

export interface DeleteActivityParams {
    id: number;
}
