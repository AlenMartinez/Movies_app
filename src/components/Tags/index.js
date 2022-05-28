import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip';


const Tags = ({labels,key}) =>{
    return (
            <Grid container  spacing={2} >
                {labels && labels.map((labe) =>
                    <Grid item key={key}>
                        <Chip label={labe} id={key} />
                    </Grid>
                )}
            </Grid>
    )
}

export default Tags;