import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Cards from '../../../components/Cards'
import Pagination from '../../../components/Pagination'
import Typography from '@mui/material/Typography';
import {getMoviesThunk} from '../../../redux'
import { dataCardsVerific } from '../../../core/utils'

const HomePages = () => {
    const dispatch = useDispatch()
    const [dataCards, setDataCards] = useState({});
    const state = useSelector((state) => state.movies)
    const [getPaginate, setGetPaginate] = useState(false);
    const [countPaginate, setCountPaginate] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [nextPage, setNextPage] = useState(10);

    useEffect(()  =>{
        dispatch(getMoviesThunk())

    }, [])

    useEffect(()  =>{
        if(!dataCardsVerific(dataCards)){
            if ('data' in state) {
                let newData = state.data
                setDataCards(newData.results)
                setCountPaginate(newData.count)

            }
        }

        if (getPaginate) {
            if ('data' in state) {
                let newData = state.data
                setDataCards(newData.results)                            
                setGetPaginate(false)      
            }
        }
    })


  //next and prev paginate
    const handleChangePage = async (event, newPage) => {
        await dispatch(getMoviesThunk({ paginate: newPage, limit: rowsPerPage }))
        setNextPage(newPage)
        setGetPaginate(true)
        setPage(newPage);
    };

    const handleChangeRowsPerPage = async (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        await dispatch(getMoviesThunk({ paginate: nextPage, limit: parseInt(event.target.value, 10) }))
        setGetPaginate(true)
  };


    return(
        <Grid>
        <Box
          sx={{
            pt: 8,
            pb: 6,
            background: "#158as"
          }}
            >
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
                    Catalogos de Peliculas
                    </Typography>
                </Container>
                </Box>  
                
            <Box component='div'>
             <Container >
                    <Grid container spacing={4}>
                        {dataCardsVerific(dataCards) ? dataCards.map((card) => (
                            <Cards id={card.id} title={card.titulo} loading={getPaginate} labels={card.etiquetas}/>
                        )) : <>Sin Datos</>}
                    </Grid>
                </Container>
            </Box>
            <Box component='div'   sx={{ p: 2,m: 2, mt: 10,background:'#3c90e214'}}     >  
                <Container maxWidth="sm" elevation={3}>
                    <Grid container  >
                        {countPaginate > 0 &&
                        <Pagination
                            handleChangeRowsPerPage={handleChangeRowsPerPage}
                            handleChangePage={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            count={countPaginate}
                        /> 
                        }
                    </Grid>
                </Container>
            </Box>
        </Box>
        </Grid>
    )
}

export default HomePages