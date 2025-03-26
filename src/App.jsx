import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import ExposureDisplay from './components/exposureTriangle/ExposureDisplay'

function App() {

const [aperature, setAperature] = useState(5)
const [shutterSpeed, setShutterSpeed] = useState(5)
const [iso, setIso] = useState(5)



const handleIsoIncrease = () => {
  if(iso < 7){
    setIso(iso + 1)
    setShutterSpeed(shutterSpeed - 1)
  }
}

const handleIsoDecrease = () => {
  if (iso > 0 && shutterSpeed < 7){
    setIso(iso - 1)
    setShutterSpeed(shutterSpeed + 1)
  }
}

const handleShutterIncrease = () => {
  if(shutterSpeed < 7){
    setShutterSpeed(shutterSpeed + 1)
    setAperature(aperature - 1)
  }
}

const handleShutterDecrease = () => {
  if(shutterSpeed > 0 && aperature < 7){
    setShutterSpeed(shutterSpeed - 1)
    setAperature(aperature + 1)
  }
}

const handleAperatureIncrease = () => {
  if(aperature < 7){
    setAperature(aperature + 1)
    setIso(iso - 1)
    
  }
}

const handleAperatureDecrease = () => {
  if(aperature > 0 && iso < 7){
    setAperature(aperature - 1)
    setIso(iso + 1)
  }
}

  return (
    <div>

      <Header />
      <ExposureDisplay aperature={aperature} iso={iso} shutterSpeed={shutterSpeed} />

        <button onClick={handleAperatureIncrease}>Aperature +</button>
        <button onClick={handleAperatureDecrease}>Aperature -</button>

        <button onClick={handleShutterIncrease}>Shutter +</button>
        <button onClick={handleShutterDecrease}>Shutter -</button>

        <button onClick={handleIsoIncrease}>iso +</button>
        <button onClick={handleIsoDecrease}>iso -</button>
    </div>
  )
}

export default App
