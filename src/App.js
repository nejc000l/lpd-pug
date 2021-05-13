import './css/general.css'
import React, {useState} from 'react'
import Info from './Components/info'
import data from './data'

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
