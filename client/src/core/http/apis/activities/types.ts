export interface GetListParams {
    activityName: string | null;
    activityStateId: number | null;
}
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

export interface GetListSampleParams {}

export interface CreateSampleParams {
    // resultedDate: string; ??!!
    sampleStateId: number;
    sampleResultId: number;
    activityId: number;
    foodId: number;
    inspectionUnitId: number;
}

export interface UpdateSampleParams extends CreateSampleParams {
    id: number;
}

export interface DeleteSampleParams {
    id: number;
}
