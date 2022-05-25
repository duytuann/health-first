export interface createCertificateParams {
    certificateNumber: string;
    certificateStateId: number;
    publishedDate: string;
    expiredDate: string;
    facilityId: number;
}

export interface updateCertificateParams extends createCertificateParams {
    id: number;
}

export interface deleteCertificateParams {
    id: number;
}
