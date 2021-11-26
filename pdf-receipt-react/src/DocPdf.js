import './App.css';
import React from 'react';
import {Document, Page, View, Text, Image} from '@react-pdf/renderer';
import Logo from './logo.jpg';


function DocPdf() {

  return (
    <Document>
        <Page size="A4">
            <View style={{ width: '98%', border: '2px solid #000', marginLeft: '10px', fontSize: '12px' }}>
                <View style={{ display: 'flex', flexDirection: 'row', border: '2px solid #000' }}>
                    <Image src={Logo} style={{width: '150px', height: '100px'}} />
                    <Text style= {{paddingLeft: '70px', marginTop: '50px'}} >Tienda de productos naturales</Text>
                    <Text style={{paddingLeft: '70px', marginTop: '50px'}} >Recibo de pago 001</Text>
                </View>
                
                <View style={{ display: 'flex', flexDirection: 'row', border: '2px solid #000' }}>
                    <Text style={{marginLeft: '500px'}} >25/11/2021</Text>
                </View>
            </View>
        </Page>
        
    </Document>
    

  );
}

export default DocPdf;
