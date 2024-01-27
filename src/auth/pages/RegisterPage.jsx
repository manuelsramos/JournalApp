import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'



const RegisterPage = () => {
    return (<AuthLayout title='Register Page'>
        <form>
            <Grid container>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField
                        label='Full Name'
                        placeholder='John Smith'
                        type='text'
                        fullWidth />
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField
                        label='Email'
                        type='text'
                        placeholder='youremail@example.com'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField
                        label='Password'
                        type='text'
                        placeholder='Your password'
                        fullWidth
                    />
                </Grid>

                <Grid container
                    spacing={2} sx={{ mb: 2, mt: 1 }}
                >
                    <Grid item xs={12} >
                        <Button variant='contained'
                            fullWidth>
                            Create
                        </Button>
                    </Grid>



                </Grid>

                <Grid container direction='row' justifyContent='end'>
                    <Typography sx={{ mr: 1 }}>¿Already registered?</Typography>
                    <Link component={RouterLink} color='inherit' to='/auth/login    '>
                        Get into
                    </Link>
                </Grid>
            </Grid>

        </form>


    </AuthLayout>



    )
}

export default RegisterPage