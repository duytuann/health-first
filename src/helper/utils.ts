// Deep flatten object

import { SystemKey } from 'core/http/apis/common/types';
import { TabItem } from 'core/models/Tab';

/**
 *
 * @param ob : Object input
 * @returns single object flattened
 */
import moment from 'moment';

export const flattenObject = (inputObj: { [key: string]: any }) => {
  const outputObj: { [key: string]: string } = {};

  for (const i in inputObj) {
    if (!inputObj.hasOwnProperty(i)) continue;

    if (typeof inputObj[i] == 'object') {
      const flatObject = flattenObject(inputObj[i]);
      for (const x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        outputObj[i + '.' + x] = flatObject[x];
      }
    } else {
      outputObj[i] = inputObj[i];
    }
  }
  return outputObj;
};

export const formatEmail = (email: string) => {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  if (!pattern.test(email)) {
    return false;
  } else {
    return true;
  }
};

export const formatPhoneNumber = (phoneNumber: string) => {
  const pattern = new RegExp(/^[0-9\b]+$/);

  if (!pattern.test(phoneNumber)) {
    return false;
  } else if (phoneNumber.length !== 10) {
    return false;
  } else {
    return true;
  }
};

export const isAlphanumeric = (text: string) => {
  const regex = new RegExp('[^a-zA-Z0-9 .,]');
  return regex.test(text);
};
export function regexPhoneNumber() {
  const regex = /((84|84|0)+(9|3|7|8|5)+([0-9]{8})\b)/g;
  return regex;
}
export const exportExcelURL = (res: any) => {
  return window.open(`${process.env.REACT_APP_DOMAIN}${res}`);
};

export const convertText = (text: any) => {
  let newText = JSON.parse(JSON.stringify(text)); // clone data
  newText = newText.toLocaleLowerCase();
  newText = replaceAccentedCharactersByLowerCase(newText);
  return newText;
};

// const replaceAccentedCharactersByUpperCase = content => {
//   let newContent = ''
//   newContent = content.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
//   newContent = content.replace(/È|É|Ẹ|Ẻ|Ẽ|Ề|Ế|Ể|Ệ|Ể|Ễ/g, 'E')
//   newContent = content.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
//   newContent = content.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ồ|Ố|Ổ|Ộ|Ỗ|Ỗ|Ờ|Ơ|Ỡ|Ợ|Ở|Ỡ/g, 'O')
//   newContent = content.replace(/Ư|Ù|Ú|Ụ|Ủ|Ũ|Ừ|Ứ|Ự|Ữ|Ử|Ữ/g, 'U')
//   newContent = content.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
//   newContent = content.replace(/Đ/g, 'D')

//   return newContent
// }

const replaceAccentedCharactersByLowerCase = (content: any) => {
  let newContent = content;
  newContent = newContent.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  newContent = newContent.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  newContent = newContent.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  newContent = newContent.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  newContent = newContent.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  newContent = newContent.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  newContent = newContent.replace(/đ/g, 'd');

  return newContent;
};

export const filterSelect = (value: any, option: any) => {
  const valueNoMark = convertText(value);
  const nameNoMark = convertText(option.children);
  return !!nameNoMark.includes(valueNoMark);
};

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

export const formatDateAndTime = (date: any) => {
  return moment(date).format('DD/MM/YYYY HH:mm');
};

export const getListComboByKey = (key: string, listSystemKey: SystemKey[]): SystemKey[] => {
  const parent = listSystemKey.find(x => x.CodeKey === key);
  if (parent)
    return listSystemKey
      .filter(x => x.ParentId === parent.Id)
      .sort((a, b) => {
        return a.SortOrder - b.SortOrder;
      });
  return [];
};

export const downLoadFile = (response: any, fileName: string = '') => {
  var binaryData = [];
  binaryData.push(response.data); //My blob

  const downloadLink: any = document.createElement('a');
  downloadLink.style1 = 'display: none';
  downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'application/force-download' }));
  // downloadLink.href = window.URL.createObjectURL(response.data);
  downloadLink.download = fileName;
  if (!fileName) {
    downloadLink.download = getDownloadFileName(response);
  }

  document.body.appendChild(downloadLink);
  downloadLink.click();
  window.URL.revokeObjectURL(downloadLink.href);
  downloadLink.parentNode.removeChild(downloadLink);
};

export function getDownloadFileName(response: any) {
  const headers = response.headers.get('content-disposition');
  return headers.split(';')[1].trim().split('=')[1].replace(/"/g, '');
}

export const hasPermission = (TabIDs: number[] | undefined, listTab: TabItem[]) => {
  if (!TabIDs || TabIDs.length === 0) return true;
  const IsVisitTab = listTab.some(item => TabIDs.some(tab => tab === item.TabID && item.IsVisitTab === true));
  return IsVisitTab;
};
