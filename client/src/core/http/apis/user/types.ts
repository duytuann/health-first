export interface getListUserParams {
    username: string | null;
    phoneNumber: string | null;
    email: string | null;
    userRoleId: number | null;
}

export interface createUserParams {
    username: string;
    password: string;
    displayName: string;
    phoneNumber: string;
    email: string;
    roles: number[];
}

export interface updateUserParams extends createUserParams {
    id: number;
}

export interface deleteUserParams {
    id: number;
}
