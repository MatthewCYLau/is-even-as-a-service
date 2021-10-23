import createPalette from '@material-ui/core/styles/createPalette';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

export default (darkMode: boolean) => {
    const palette = createPalette({
        primary: {
            main: '#FF7E39',
            light: '#F9D5A7',
            contrastText: '#fff'
        },
        secondary: {
            main: '#90AACB',
            light: '#FEF1E6',
        },
        text: {
            secondary: 'rgba(0, 0, 0, 0.56)'
        },
        type: darkMode ? 'dark' : 'light'
    });

    const theme = createMuiTheme({ palette });
    theme.overrides = {
        MuiLink: {
            root: {
                fontWeight: 500
            }
        }
    };
    return responsiveFontSizes(theme);
};
