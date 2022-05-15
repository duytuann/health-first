import { ThemeData, ThemeDataDefault, ThemeType } from '../types';

const defaults: ThemeDataDefault = {
  primaryColor: '#2260bd',
  bluedarkColor: '#0e3774',
  green500Color: '#4caf50',
  green600Color: '#43a047',
  red500Color: '#ef4444',
  red600Color: '#dc2626',
  orange800Color: '#ef6c00',
  textprimaryColor: '#4a4a4a',
  textwhiteColor: '#fff',
  bluelightColor: '#edf4ff',
  textblueColor: '#0f58c0',
  red: '#F04164',
  red600: '#dc2626',
  green: '#08CA98',
  blue: '#3391FF',
  yellow: '#E7BC26',
  violet: '#DE20DF',
  primary: '#2260bd',
  secondary: '#d9d9d9',
  white: '#FFFFFF',
  blinkup: '#215448',
  blinkdown: '#613E45',
  blink: '#253147',
  bgGreen: '#00B98D',
  bgRed: '#DD3640',
  bgWhite: '#FFFFFF',
  bgApp: '#F4F5F7',
  tdborder: 'f0f0f0',
  rowInactiveColor: '#c1eac1',
};

const themes: { [key in ThemeType]: ThemeData } = {
  [ThemeType.DARK]: {
    ...defaults,
    backgroundColor: '#0F1721',
    backgroundColor1: '#070D13',
    backgroundColor2: '#17202D',
    bgBase: '#03060B',
    bgElevated1: '#101B27',
    bgElevated2: '#172230',
    bgElevated3: '#1F2C3C',
    bgElevated4: '#283648',
    primaryActive: '#3391FF',
    primary2: '#253247',
    neutral1: '#FFFFFF',
    neutral2: '#ADB3C0',
    neutral3: '#6E7789',
    neutral4: '#3C424B',
    neutral5: '#2B3039',
    neutral6: '#253147',
    text: '#F8F8F8',
    textSecond: '#8D94A0',
    hover: '#26444E',
    borderColor: '#283648',
    shadowInner1: '#394452',
    shadowInner2: '#1F6BFF',
    shadowInner3: '#202730',
    shadowInner3Up: '#38424F',
    shadowRight8px: '#26303E',
    disabled: '#787878',

    boxShadow: '#394452',
    zIndex: {
      tooltip: 998,
      modal: 999,
      popup: 9999,
    },
    logo: '#F8F8F8',
  },
  [ThemeType.LIGHT]: {
    ...defaults,
    backgroundColor: 'white',
    backgroundColor1: '#070D13',
    backgroundColor2: '#17202D',
    bgBase: '#F3F3F3',
    bgElevated1: '#FFFFFF',
    bgElevated2: '#EBEBEB',
    bgElevated3: '#DCDCDC',
    bgElevated4: '#C0C0C0',
    primaryActive: '#0E6CDA',
    primary2: '#253147',
    neutral1: '#3F4144',
    neutral2: '#777E86',
    neutral3: '#9EA4A9',
    neutral4: '#C6C8CC',
    neutral5: '#D7DADF',
    neutral6: '#253147',
    text: 'black',
    textSecond: 'gray',
    hover: 'green',
    borderColor: 'lightgray',
    shadowInner1: '#ADBBC5',
    shadowInner2: '#3391FF',
    shadowInner3: '#DAE0E8',
    shadowInner3Up: '#DAE0E8',
    shadowRight8px: '#D1D1D1',
    disabled: '#D8E0F0',

    boxShadow: '#394452',
    zIndex: {
      tooltip: 998,
      popup: 999,
      modal: 9999,
    },
    logo: '#0D1CCF',
  },
};

export default themes;
