import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import NavBar from '../../components/NavBar'
import Footer from './Footer';


const  Dashboard = ({children}) => {

    return (
        <Box>
            <NavBar/>
            {children}
            <Footer/>
        </Box>
    )
}

export default Dashboard;