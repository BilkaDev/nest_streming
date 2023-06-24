import { Styles } from '../../theme/theme';

export const container: Styles = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: { md: 'space-between' },
  gap: { xs: 2, md: 5 }
};
export const tableContainer: Styles = {
  flex: 1
};
export const tableHeader: Styles = {
  marginBottom: 2,
  textAlign: 'center'
};
