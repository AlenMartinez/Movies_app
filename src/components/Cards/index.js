import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import SkeletonLoader from '../SkeletonLoader'
import Box from '@mui/material/Box';


const Cards = ({id,title,loading,labels}) =>{

    return (
        <Grid item key={id} xs={12} sm={6} md={4}>
            <SkeletonLoader id={id}loading={loading} >
                    <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                    <CardContent sx={{ flexGrow: 1, background:'#001e3c'}}>
                        <Typography gutterBottom variant="h5" component="h2">
                        {title}
                        </Typography>
                    </CardContent>
                    <Box  sx={{  background:'#001e3c',padding:2}}>
                        <Grid container  spacing={2} >
                            {labels && labels.map((labe) =>
                                <Grid item >
                                    <Chip label={labe} />
                                </Grid>
                            )}
                            </Grid>
                        </Box>
                    <CardActions  sx={{  background:'#001e3c'}}>
                        <Button variant="outlined" onClick={() => console.log(id,'this is is')}>Ver</Button>
                    </CardActions>
                    </Card>
            </SkeletonLoader>
        </Grid>
    )
        
}


export default Cards;