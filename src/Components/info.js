import React, { useState } from 'react';
import '../css/info.css'
import lzs from '../img/Lzs.png';
import { Document, Page  } from 'react-pdf';

import samplePDF from '../files/LAPK.pdf';

const Info = ({currentText})=>{
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    return(
        <div className="container">
            <div className="container-left">
                    <div className="title big">Lovska Družina Pugled</div>
                    <div className="logo"><img src={lzs} alt="" />
                    <div className="information">Vidergarjeva ulica 13 Ljubljana <br />
                    1261 LJUBLJANA-DOBRUNJE <br /> <br />
                    EMAIL: <br />ld.pugled@gmail.com
                    </div>
                    </div>
                    <div className="nav">
                    <ul>
                        <li>
                            <a href="#">-Informacije javnega značaja</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">-APK:Afriška Prašičja Kuga</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">-APK-Načrt ravnanja upravljalca lovišč</a>
                        </li>
                    </ul>
                    
                    </div>
            </div>
            <div className="container-right">
                   
                    <div className="title small"><h2>{currentText.title}</h2></div>
                    <div className="content smaller-text"><h3>{currentText.text}</h3></div>
                    <Document
        file={samplePDF}
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
            </div>
     
     
        
        

    )
}

export default Info;