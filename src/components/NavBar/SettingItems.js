import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import {  useDispatch } from 'react-redux'
import { logoutAction } from '../../redux'

const SettingItems = ({labels}) =>{
    const auth = localStorage.getItem('token');
    const dispatch = useDispatch()
    return(
        <>
        {
                auth ?
                    <Typography style={{ color: 'white' }} textAlign="center" onClick={() => dispatch(logoutAction())}>{labels}</Typography>
                    : <Link  to='/login'>
                    <Typography style={{ color: 'white' }} textAlign="center" > Inicar Session</Typography> 
                </Link>
        }
        </>
    )
}

export default SettingItems;