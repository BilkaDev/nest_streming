import { Styles } from '../../../theme/theme';

export const container: Styles = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  columnGap: { md: 5 }
};

export const details: Styles = {
  paddingTop: { xs: 0, md: 5 },
  paddingX: 2,
  flex: '1'
};

export const imageContainer: Styles = {
  width: '100%',
  maxWidth: 500
};
export const playIcon: Styles = {
  display: 'flex',
  alignItems: 'center',
  pl: 1
};
