import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const pageTheme = createTheme({
    palette: {
        primary: {
            main: '#162955',
            view: '#D6D5D5'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})