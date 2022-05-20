import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import themes from './abstracts/_themes';

const ThemeProvider: React.FC = ({ children }) => {
  const { type } = useSelector((state: RootState) => state.theme);

  return <ThemeProviderStyled theme={themes[type]}>{children}</ThemeProviderStyled>;
};

export default ThemeProvider;
