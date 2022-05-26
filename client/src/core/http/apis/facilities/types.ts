export interface GetListParams {
    facilityName: string | null;
    businessTypeId: number | null;
    wardId: number | null;
    provinceId: number | null;
    districtId: number | null;
    facilityStateId: number | null;
}

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
