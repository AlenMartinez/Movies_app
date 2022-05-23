import React, {useEffect, useState} from 'react';
//components 
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonSubmit from '../../../components/Forms/ButtonSubmit'
//styles
import {styles} from './styles'
//utlis
import {getCredentialsValidate } from '../../../core/utils'
import { useSelector, useDispatch } from 'react-redux'
//actions
import {actionAlert,clearAlert, getLoginThunk} from '../../../redux'


//accessActions
import BasicAlerts from '../../../components/Alerts/BasicAlerts'


const LoginPages = () => {

    const state = useSelector((state) => state)
    const alertData = state.alert
    const [helperText, setHelperText] = useState('');
    const [loading,setLoading] = useState(false);
    const [buttomDisabled,setButtomDisabled] = useState(true);
    const dispatch = useDispatch()
    const [credentials, setCredentials] = useState({
            username: "",
            password: "",
    });


    useEffect(() => {
        if (state.access.error) {
            dispatch(actionAlert({...state.access}))
        }
    },[state.access])

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        setLoading(true)
        //fecht login
        await dispatch(getLoginThunk(credentials))
        //loading buttom
        setTimeout(function() {
            setLoading(false)
        }, 3000);
        setTimeout(function() {
            dispatch(clearAlert())
        }, 6000);
    }; 


    const handleChange = (evt) => {
        const { target } = evt;
        if ('name' in target) {
            const { name, value } = target;
            if(name == 'password'){
                const userValidate = getCredentialsValidate(value)
                setHelperText(userValidate.title)
                setButtomDisabled(userValidate.disabled)
            }            
            const newValues = {
                ...credentials,
                [name]: value,
                };

            setCredentials(newValues);
        }
    }

    return (
        <Grid 
            container
            component="main" 
            autoComplete="off"
            sx={styles.gridContainer}
            >
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={styles.gridImg}
            />
            <Grid />
            {/* init form */}

            <Grid item xs={12} sm={8} md={5} elevation={6} style={styles.box}>
                <Box>
                     {alertData.alertStatus && <BasicAlerts type={alertData.type} title={alertData.title} />}
                </Box>
                <Box sx={styles.boxSign}>
                    <Typography  variant="h3" style={styles.title} component="div">
                        Bienvenido
                    </Typography>
                    {/* form */}
                    <Box 
                        component="form"
                        noValidate
                        autoComplete="off"     
                        onSubmit={handleSubmit} sx={{ mt: 1 }}
                    >
                      <Box>
                        <TextField
                            margin="normal"
                            variant="filled"
                            fullWidth
                            id="username"
                            label="Usuario"
                            name="username"
                            value={credentials.user}
                            onChange={handleChange}
                            placeholder="Ingrese tu usuario"
                            style={styles.inputFile}
                            type='text'
                           
                            autoComplete="new-user"
                        />
                        <TextField
                            variant="filled"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Contraseña"
                            style={styles.inputFile}   
                            type="password"
                            helperText={helperText}
                            id="password"
                            value={credentials.password}
                            placeholder="Ingrese tu contraseña"
                            autoComplete="new-password"
                            onChange={handleChange}

                        />
                            <ButtonSubmit
                                disabled={buttomDisabled}
                                loader={loading}
                                title='Iniciar Session'
                                style={{ mt: 3, mb: 2 }}
                            />
                    </Box>
                    </Box>
                </Box>
            </Grid>
            {/* end form */}
        </Grid>
    )
}

export default LoginPages