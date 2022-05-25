export interface createUserParams {}

export interface updateUserParams extends createUserParams {
    id: number;
}

export interface deleteUserParams {
    id: number;
}
