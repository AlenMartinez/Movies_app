import React, { useState,useId } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonSubmit from '../Forms/ButtonSubmit'
import {addCommentsMovies} from '../../redux'

const TextFieldComments = () => {
    const state = useSelector((state) => state.movies.movie_comments)
    let paramsUrl = useParams();
    const dispatch = useDispatch();
    const [comments, setComments] = useState({});
    const [disabledButtom, setDisabledButtom] = useState(true);

   const commentsID = useId();
   
      const handleChange = (evt) => {
        const { target } = evt;
        if ('name' in target) {
            const { name, value } = target;
            if(value.length > 0) setDisabledButtom(false)
            else setDisabledButtom(true)
            const newValues = {
                    id:`${commentsID}-${value}`,
                    mensaje: value,
                    movie_id: paramsUrl.id,
                    usuario: {first_name: name,last_name: ''},
                };

         setComments({...newValues});

        }


    }

    
    const handleSubmit =  (evt) => {
        evt.preventDefault()
        dispatch(addCommentsMovies(comments))      

    }; 

    
    return(
        <Box                          
            component="form"
            noValidate
            onSubmit={handleSubmit} >
            <TextField
                id="comment"
                label="Agregar un Comentario"
                multiline
                rows={4}
                value={comments.comment}
                onChange={handleChange}
                name="comment"
                fullWidth 
                variant="filled"
            />
            <Box sx={{pt:3}}>
                <ButtonSubmit disabled={disabledButtom} title={'Agregar Comentario'} />
            </Box>
        </Box>
    )

}

export default  TextFieldComments;