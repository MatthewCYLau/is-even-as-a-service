import createPalette from '@material-ui/core/styles/createPalette';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

export default (darkMode: boolean) => {
    const palette = createPalette({
        primary: {
            main: '#86BC25',
            light: '#C4D600',
            contrastText: '#fff'
        },
        secondary: {
            main: '#00A3E0',
            light: '#62B5E5',
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
