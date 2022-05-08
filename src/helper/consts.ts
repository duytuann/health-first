import SelectOption from 'core/models/SelectOption';
export const API_REQUEST_TIMEOUT = 200000; // 20s
export const ACCESS_TOKEN_KEY = 'access_token';
export const REFRESH_ACCESS_TOKEN_KEY = 'refresh_token';

export const RESPONSE_CODE = {
  TOKEN_EXPIRED: 401,
};

export const PAGE_SIZE_OPTIONS = ['10', '20', '50', '100'];
export const DEFAULT_PAGE_SIZE = 50;

export const ROLE_GROUP_STATUS: SelectOption[] = [
  {
    label: 'Tất cả',
    value: 0,
  },
  {
    label: 'Tin bài',
    value: 1,
  },
  {
    label: 'Phóng sự',
    value: 2,
  },
  {
    label: 'Ghi nhanh',
    value: 3,
  },
  {
    label: 'Bài phân tích',
    value: 4,
  },
  {
    label: 'Phim truyện',
    value: 5,
  },
  {
    label: 'Phim hoạt hình',
    value: 6,
  },
  {
    label: 'Khoa học - giáo dục',
    value: 7,
  },
  {
    label: 'Ca nhạc',
    value: 8,
  },
  {
    label: 'Thể thao',
    value: 9,
  },
  {
    label: 'Ký sự',
    value: 10,
  },
  {
    label: 'Gameshow',
    value: 11,
  },
  {
    label: 'Trực tiếp',
    value: 12,
  },
];
