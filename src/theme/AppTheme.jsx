import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { pageTheme } from "./";



export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={pageTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
