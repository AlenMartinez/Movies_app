import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CustomBreadcrumbs from '../../../components/Breadcrumbs'
import Tags from '../../../components/Tags'
import BasicTabs from '../../../components/TabPanel'
import {getShowMoviesThunk, getCriticsMoviesThunk, getCommentsMoviesThunk} from '../../../redux'
import { useParams } from "react-router-dom";
import { getUniqueListBy } from '../../../core/utils'

const MoviePages = () => {
    let paramsUrl = useParams();
    const dispach = useDispatch()
    const state = useSelector((state) => state.movies)
    const [title, setTitle] = useState('');
    const [tagas, setTags] = useState([]);
    const [critics, setCritics] = useState([]);
    const [comments, setComments] = useState([]);


    useEffect(() => {
        dispach(getShowMoviesThunk(paramsUrl.id))
        dispach(getCriticsMoviesThunk(paramsUrl.id))
        dispach(getCommentsMoviesThunk(paramsUrl.id))
    },[])


    useEffect(() => {
        if ('movie' in state) {
            setTitle(state.movie.titulo)
            setTags(state.movie.etiquetas)
        }

        if ('movie_critics' in state) setCritics(state.movie_critics)
        
        if ('movie_comments' in state) {
            if (state.movie_comments !== comments) {
                let newCont = comments.concat(state.movie_comments)
                newCont = getUniqueListBy(newCont,'id')
                setComments(newCont);
            }

        }
            
    },[state])
    

    return (
        <Grid>
            <Box
            sx={{
                pt: 8,
                pb: 6,
                background: "#158as"
            }}
            >
            <Box component="div">
                <Container elevation={3}>
                    <CustomBreadcrumbs page={title}/>
                </Container>
            </Box>
            <Box component="div">
                    
                <Container maxWidth="sm" >
                    <Typography
                    component="h4"
                    variant="h5"
                    align="center"
                    color="text.primary"
                    sx={{ p: 2,m: 2}}
                    gutterBottom
                    >
                    <Box sx={{ fontWeight: 'bold', m:2,textAlign: 'center' }}>
                        {title}
                    </Box>
                    </Typography>
                </Container>
            </Box>  
                <Box sx={{ pt: 2}} >
                    <Container maxWidth="sm" >
                        <Typography component="div">
                            <Box sx={{ fontWeight: 'bold', m:2,textAlign: 'center' }}>
                               Etiquetas
                            </Box>                        
                        </Typography>
                        {/* Tags */}
                         <Tags labels={tagas} />
                    </Container>
                </Box>
                <Box sx={{ pt: 5}} >
                    <Container maxWidth="sm" >
                        <BasicTabs labels={['Comentarios','Criticas']} comments={comments}  critics={critics} />
                    </Container>
                </Box>
         </Box>
    </Grid>
    )
}

export default MoviePages;