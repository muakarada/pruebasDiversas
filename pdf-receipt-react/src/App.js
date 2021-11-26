import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DocPdf from './DocPdf';
import {PDFViewer, PDFDownloadLink} from '@react-pdf/renderer';


function App() {
  
const [verPdf, setVerPdf] = React.useState(false);

  return (
    <div className="App">
      <Box>
        <Button onClick={()=>{
          setVerPdf(!verPdf);
        }} variant="outlined" sx={{ m: '2rem' }}> {verPdf ? "Ocultar PDF":"Ver Pdf"}</Button>
        <PDFDownloadLink document={<DocPdf />} fileName="recibo.pdf">
          <Button variant="outlined" sx={{ m: '2rem' }}>Descargar PDF</Button>
        </PDFDownloadLink> 
        <Box>
          <TableContainer sx={{ width: '80%', ml: '1rem', mr: '1rem', border: '2px solid #000' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Logo</TableCell>
                  <TableCell>tienda de productos naturales</TableCell>
                  <TableCell>Recibo de pago: 001</TableCell>
                  <TableCell>Fecha: 25/11/2021</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Productos adquiridos:</TableCell>
                  <TableCell>Valor de unidad:</TableCell>
                  <TableCell>Cantidades:</TableCell>
                  <TableCell>Total producto:</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Aceite hidratante</TableCell>
                  <TableCell>$10.500</TableCell>
                  <TableCell>20</TableCell>
                  <TableCell>$210.000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan={2} />
                  <TableCell colSpan={2} align="right">Subtotal:</TableCell>
                  <TableCell align="right">$210.000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} align="right">Entrega:</TableCell>
                  <TableCell align="right">$5.500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3} align="right">Total:</TableCell>
                  <TableCell align="right">$215.500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ width: '40%' }} >Datos solicitud de pedido contra entrega: </TableCell>
                </TableRow>
                  <TableRow>
                      <TableCell>Nombres: Lina María</TableCell>
                      <TableCell colSpan={2}>Apellidos: Arango Quevedo</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Tipo de documento: CC</TableCell>
                      <TableCell>Número: 111111111</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Dirección: Calle 12 # 35-80</TableCell>
                      <TableCell colSpan={2}>Número casa, apto, oficina: Bloque B, casa 202</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Barrio: San Diego</TableCell>
                      <TableCell>Celular: 3009876543</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Fecha de entrega: 30/11/2021</TableCell>
                    </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      {verPdf ? (<PDFViewer style={{width: '60%', height: '60vh'}} ><DocPdf /></PDFViewer>) : null}
    </div>
  );
}

export default App;
