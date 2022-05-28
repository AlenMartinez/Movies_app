import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SkeletonLoader from '../SkeletonLoader'
import Tags from '../Tags'
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const Cards = ({id,title,loading,labels}) =>{
    return (
        <Grid item key={id} xs={12} sm={6} md={4}>
            <SkeletonLoader id={id}loading={loading} >
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                     key={id} 
                    >
                    {/* Title */}
                    <CardContent sx={{ flexGrow: 1, background:'#001e3c'}}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {title}
                        </Typography>
                    </CardContent>
                    {/* Tags */}
                    <Box  sx={{  background:'#001e3c',padding:2}}>
                        <Tags  key={id}  labels={labels}/>
                    </Box>
                    {/* Action button */}
                    <CardActions  sx={{  background:'#001e3c'}}>
                        <Link underline="none" to={`/movie/${id}`}>
                            <Button variant="outlined">Ver</Button>
                        </Link>
                    </CardActions>
                    </Card>
            </SkeletonLoader>
        </Grid>
    )
}


export default Cards;