import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';

function Home(){
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <h3>Bienvenido a mi sitio web</h3>
                    <h2>Inicio</h2> 
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to ="/people"> 
                        <h2>Personas</h2>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to ="/enterprises">
                        <h2>Empresas</h2>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;