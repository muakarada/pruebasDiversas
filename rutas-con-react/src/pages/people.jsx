import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
function People () {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <h3>Bienvenido a mi sitio web</h3>
                    <h2>Personas</h2> 
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to ="/"> 
                        <h2>Inicio</h2>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to ="/enterprises">
                        <h2>Empresas</h2>
                    </Link>
                </Grid>
            </Grid>
            <Grid container>
                <h1>Hola estás en la vista gente</h1>
                <Grid item xs={12} md={4}>
                    <p>Negociaciones alrededor del mundo siempre en alianza con la más alta calidad</p>
                </Grid>
                <Grid item xs={12} md={4}>
                    <p>Personas de todo el sector comercial hablan de los proyectos en alianza con la OIT</p>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src="" alt="Una imagen más"></img>
                </Grid>

            </Grid>
        </div>
    );
}

export default People;