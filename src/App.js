import './css/general.css'
import React, {useState} from 'react'
import Info from './Components/info'
import data from './data'
import { Document, Page ,pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// states

function App() {
  const [text, setText] = useState(data())
  const [currentText, setCurrentText] = useState(text[0])
  return (
    <div className="App">

    <Info currentText={currentText}/>
    </div>
  );
}

export default App;
