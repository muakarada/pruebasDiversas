import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
function Enterprises () {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <h3>Bienvenido a mi sitio web</h3>
                    <h2>Empresas</h2> 
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to ="/"> 
                        <h2>Inicio</h2>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to ="/people">
                        <h2>Personas</h2>
                    </Link>
                </Grid>
            </Grid>
            <Grid container>
                <h1>Hola estás en la vista empresa</h1>
                <Grid item xs={12} md={6}>
                    <img src="" alt="Otra imagen más"></img>
                </Grid>
                <Grid item xs={12} md={6}>
                    <p>Buscas una alianza empresarial que va más allá de la infraestructura nacional de comercio</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default Enterprises;