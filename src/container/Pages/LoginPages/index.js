import * as React from 'react';
//components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//styles
import {styles} from './styles'
//utlis


const LoginPages = () => {
  


    return (
        <Grid container component="main"   noValidate
      autoComplete="off" sx={styles.gridContainer}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={styles.gridImg}
            />
            <Grid />
            {/* init form */}
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={styles.box}>
                <Box sx={styles.boxSign}>
                    <Typography component="h1" variant="h5">
                        Bienvenido
                    </Typography>
                    {/* form */}
                    <Box component="form"   sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="none"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="none"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                           Iniciar Session
                        </Button>

                    </Box>
                </Box>
            </Grid>
            {/* end form */}
        </Grid>
    )
}

export default LoginPages