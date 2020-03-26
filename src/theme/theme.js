// Material UI Theme
import { createMuiTheme } from '@material-ui/core/styles';

import overrides from './overrides';
import breakpoints from './breakpoints';
import palette from './palette';
import utils from './utils';

export default createMuiTheme({
  overrides,
  breakpoints,
  palette,
  utils
});
