import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

// example instance of theme, will be changed soon
const theme = createMuiTheme({
  typography: {
    button: {
      fontWeight: 'bold',
    },
  },
});

export default theme;
