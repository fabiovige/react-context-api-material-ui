import { createMuiTheme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = {
    type: 'light',
    /*primary: {
        main: '#FFCD88',
        contrastText: '#242526' 
    },
    background: {
        default: '#242526'
    }*/
}

const theme = createMuiTheme({
    palette,
});

export default theme;
