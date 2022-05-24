export const API_REQUEST_TIMEOUT = 200000; // 20s
export const ACCESS_TOKEN_KEY = 'access_token';
export const REFRESH_ACCESS_TOKEN_KEY = 'refresh_token';

export const RESPONSE_CODE = {
    TOKEN_EXPIRED: 401,
};

export const PAGE_SIZE_OPTIONS = ['10', '20', '50', '100'];
export const DEFAULT_PAGE_SIZE = 50;

export const planState = [
    {
        id: 1,
        name: 'Đang hoạt động',
    },
    {
        id: 2,
        name: 'Ngưng hoạt động',
    },
];

export const facilityState = [
    {
        id: 0,
        name: 'Tất cả',
    },
    {
        id: 1,
        name: 'Đang hoạt động',
    },
    {
        id: 2,
        name: 'Ngưng hoạt động',
    },
];

export const businessType = [
    {
        id: 0,
        name: 'Tất cả',
    },
    {
        id: 1,
        name: 'Sản xuất thực phẩm',
    },
    {
        id: 2,
        name: 'Ngưng hoạt động',
    },
];

export const roleList = [
    {
        id: 1,
        name: 'Quản trị viên',
    },
    {
        id: 2,
        name: 'Quản lý',
    },
    {
        id: 3,
        name: 'Quản lý cấp cao',
    },
    {
        id: 4,
        name: 'Người dùng',
    },
];
