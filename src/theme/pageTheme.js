import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const pageTheme = createTheme({
    palette: {
        primary: {
            main: '#162955'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})