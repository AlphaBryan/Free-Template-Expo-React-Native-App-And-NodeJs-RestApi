import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { COLORS } from '../color';

type Props = {
  children: ReactNode;
};

const Theme = (props: Props) => {
  const { children } = props;

  return <ThemeProvider theme={COLORS}>{children}</ThemeProvider>;
};

export default Theme;
