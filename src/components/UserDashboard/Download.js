import React, { PureComponent, useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { getInvoices } from '../../Service/service';


const pdfGenerator = () => {

    

    const jsPdfGenerator = () => {
            let response =  getInvoices();
            console.log(response.data[0])

        var doc = jsPDF('p', 'pt');
        
        // doc.text(20, 20, 'this is default text');
        doc.autoTable({
            head: [['Id', 'Num_fact', 'Date facture	','Date de paiement','Type de paiement','Etat de paiement']],
            body:invoices.id
            
          })
          
          console.log(invoices)
        doc.setFont('courier');

        // doc.text(20, 30, 'This is text with courier font ')

        doc.save('invocie.pdf')


    }
    return (
        <span className='las la-arrow-down download' onClick={() => jsPdfGenerator()}></span>
    )
}

export default pdfGenerator