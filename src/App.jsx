import { useState } from 'react'
import './App.css'

function App() {

const [aperature, setAperature] = useState(5)
const [shutterSpeed, setShutterSpeed] = useState(5)
const [iso, setIso] = useState(5)



const apertureOptions = [11, 16, 8, 5.6, 4, 2.8, 2, 1.4]
const isoOptions = [100, 200, 400, 800, 1600, 3200, 6400, 12800]
const shutterSpeedOptions = ['1/1000', '1/800', '1/250', '1/125', '1/60', '1/30', '1/15', '1/8']

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

      <p>{apertureOptions[aperature]}</p>
        <button onClick={handleAperatureIncrease}>Aperature +</button>
        <button onClick={handleAperatureDecrease}>Aperature -</button>

      <p>{shutterSpeedOptions[shutterSpeed]}</p>
        <button onClick={handleShutterIncrease}>Shutter +</button>
        <button onClick={handleShutterDecrease}>Shutter -</button>

      <p>{isoOptions[iso]}</p>
        <button onClick={handleIsoIncrease}>iso +</button>
        <button onClick={handleIsoDecrease}>iso -</button>

    </div>
  )
}

export default App
