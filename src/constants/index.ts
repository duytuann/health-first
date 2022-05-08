export const defaultObjectGuid = '00000000-0000-0000-0000-000000000000';

export const TypeTest = [
  {
    name: 'Xét Nghiệm PCR',
    value: 1,
  },
  {
    name: 'Test nhanh tập trung',
    value: 2,
  },
  // {
  //   name: 'Test nhanh lưu động',
  //   value: 3
  // }
];

export const regexAphabetAndNumber = '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$';

export function getRegexYoB() {
  const re = /^((19[0-9][0-9])|(20(([01][0-9])|(2[01]))))(\d){0}$/g;
  return re;
}

export function getRegexCTValue() {
  const re = /^\d+(,|.\d{1,3})?$/g;
  return re;
}

export function getRegexMobile() {
  const re = /^(0|\+84)((3[2-9])|(5[2689])|(7[06-9])|(8[1-6789])|(9[0-46-9]))(\d){7}$/g;
  return re;
}

export function getRegexPhone() {
  const re = /^(0|\+84)2([48](\d){8}|(0[3-9]|1[0-9]|2[0-25-9]|3[2-9]|5[124-9]|6[0-39]|7[0-7]|9[0-4679])(\d){7})$/g;
  return re;
}
export const getRegexPassword = () => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return regex;
};

export function validatePhone(phone: string) {
  if (phone.length === 11) {
    return new RegExp(getRegexPhone()).test(phone);
  }
  if (phone.length === 10) {
    return new RegExp(getRegexMobile()).test(phone);
  }
  return false;
}

export const sessionStatus = [
  { value: 1, name: 'Mới tạo' },
  { value: 2, name: 'Đang lấy mẫu' },
  { value: 3, name: 'Lấy mẫu xong' },
  { value: 4, name: 'Đã chọn phòng XN' },
  { value: 5, name: 'Đã có kết quả' },
  { value: 6, name: 'Hoàn thành' },
  { value: 7, name: 'Đã công bố' },
];

// export const sessionStatusColor = ['rgba(255, 206, 86, 1)', '#4CAF50', '#CD201F', '#4A4A4A', '#ef6c00']
export const sessionStatusStyle = ['noresult', 'positive', 'negative', 'damaged', 'suspect'];

export const statisticDataType = [
  { value: 1, title: 'Hôm nay' },
  { value: 2, title: 'Tuần này' },
  { value: 3, title: 'Tháng này' },
  { value: 4, title: 'Khoảng thời gian' },
];

export const SampleType = [
  { name: 'Mẫu dương tính', type: 2 },
  { name: 'Chạy lại mẫu', type: 4 },
  { name: 'Lấy lại mẫu', type: 3 },
  { name: 'Mẫu âm tính', type: 1 },
];

export const DoiTuongKiemMau = [
  { value: 1, title: 'Lấy mẫu', color: '#8B0000' },
  { value: 2, title: 'Tạo đợt', color: '#FF7F50' },
  { value: 3, title: 'Điều phối (CDC)', color: '#8A2BE2' },
  { value: 4, title: 'Xét nghiệm', color: '#0000FF' },
  { value: 6, title: 'Lấy lại mẫu', color: '#2F4F4F' },
];
