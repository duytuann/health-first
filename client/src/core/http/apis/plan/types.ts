export interface getListParams {
    planName: string | null;
    planStateId: number | null;
}

export interface createPlanParams {
    name: string;
    publishedDate: string;
    description: string;
    planStateId: number;
}

export interface updatePlanParams extends createPlanParams {
    id: number;
}

export interface deletePlanParams {
    id: number;
}
