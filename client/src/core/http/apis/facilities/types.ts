export interface CreateParams {
    name: string;
    address: string;
    facilityStateId: number;
    businessTypeId: number;
    wardId: number;
}

export interface UpdateParams extends CreateParams {
    id: number;
}

export interface DeleteParams {
    id: number;
}
