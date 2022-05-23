import { ThemedStyledProps } from 'styled-components';
export interface ThemeData extends ThemeDataDefault {
    text: string;
    textSecond: string;
    bgBase: string;
    backgroundColor1: string;
    backgroundColor2: string;
    backgroundColor: string;
    primaryActive: string;
    primary2: string;
    neutral1: string;
    neutral2: string;
    neutral3: string;
    neutral4: string;
    neutral5: string;
    neutral6: string;
    bgElevated1: string;
    bgElevated2: string;
    bgElevated3: string;
    bgElevated4: string;
    borderColor: string;
    shadowInner1: string;
    shadowInner2: string;
    shadowInner3: string;
    shadowInner3Up: string;
    shadowRight8px: string;
    hover: string;
    button?: {
        hover?: string;
        disabled?: string;
    };
    input?: {};
    disabled: string;

    boxShadow: string;
    zIndex: {
        tooltip: number;
        modal: number;
        popup: number;
    };
    logo: string;
}

export interface ThemeDataDefault {
    red: string;
    red600: string;
    green: string;
    blue: string;
    bgApp: string;
    yellow: string;
    violet: string;
    white: string;
    blinkup: string;
    blinkdown: string;
    blink: string;
    bgGreen: string;
    bgRed: string;
    bgWhite: string;
    primaryColor: string;
    primary: string;
    secondary: string;
    bluedarkColor: string;
    green500Color: string;
    green600Color: string;
    red500Color: string;
    red600Color: string;
    orange800Color: string;
    textprimaryColor: string;
    textwhiteColor: string;
    bluelightColor: string;
    textblueColor: string;
    tdborder: string;
    rowInactiveColor: string;
}

export enum ThemeType {
    DARK = 'dark',
    LIGHT = 'light',
}

export type AppThemeProps<P> = ThemedStyledProps<P, ThemeData>;
