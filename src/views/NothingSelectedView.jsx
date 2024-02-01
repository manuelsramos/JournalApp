import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (

        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.view', borderRadius: 5 }}
        >
            <Grid item xs={12}>
                <StarOutline sx={{ fontSize: 100, color: '#FFB632' }} />

            </Grid>
            <Grid item xs={12}>
                <Typography color='#242423' variant='h5'>Select o create a new input</Typography>

            </Grid>
        </Grid>
    )
}
