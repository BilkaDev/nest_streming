import { Styles, theme } from '../../theme/theme';
export const topBarHeight = 100;

export const outerContainer: Styles = {
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: theme.palette.grey[200]
};

export const contentWrapper: Styles = {
  flexGrow: 1,
  paddingTop: `${topBarHeight}px`,
  paddingRight: 3,
  paddingLeft: 3
};
