import React, {useEffect} from 'react';
import {  useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextFieldComments from './TextFieldComments'
import { tokenVerificAction } from '../../redux'

const Comments = () =>{

    const dispach = useDispatch()
    const auth = localStorage.getItem('token');


    useEffect(() => {
        if (auth) dispach(tokenVerificAction(auth))   
    }, [])
    
    return(
        <Box>
            <Typography variant="h5" component="h5" sx={{p:3, m:3}}>Comentario</Typography>
            {
                auth ?  <TextFieldComments  />
                    :   <Link underline="none" to={`/login`}>
                            <Button variant="outlined">Para agregar un comentario debes Iniciar Session</Button>
                        </Link>
            }
           
        </Box>
    )
}





export default Comments;