import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Footer = () =>{
    return(
        <Box component='footer' sx={{
            pt: 8,
            pb: 6,
            textAlign:'center'
          }}>
            <Container >
                <Link href="https://www.linkedin.com/in/alen-martinez-a0a3a5191" target="_blank" underline="none">
                    Desarrollado por Alen martinez 
                </Link>
            </Container>
        </Box>
    )
}

export default Footer