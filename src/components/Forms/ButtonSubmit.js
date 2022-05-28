import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '../Progress/CircularProgress'


const ButtonSubmit = ({title,style,loader,disabled}) =>{
    return(
        <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={style}
            disabled={disabled}
        >
            <Typography variant="button" display="block" gutterBottom>
                {loader ? <CircularProgress/> : title }
            </Typography>
        </Button>
    )
}

export default ButtonSubmit;