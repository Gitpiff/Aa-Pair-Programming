import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useClimateTheme } from '../../context/ClimateContext';
import { useEffect, useState } from 'react';

function Thermometer() {
  const { temperature, setTemperature } = useClimateTheme();

  const [desiredTemp, setDesiredTemp] = useState(temperature);

  useEffect(()=> {
    const tempDiff = setTimeout(() => {
      if(desiredTemp < temperature){
        setTemperature(prevTemp => {prevTemp--})
      }
      if(desiredTemp > temperature){
        setTemperature(prevTemp => {prevTemp + 1})
      }
    }, 1000)
    tempDiff()
    return ()=>{
      clearTimeout(tempDiff)
    }

  }, [desiredTemp, setDesiredTemp, temperature])



  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => setDesiredTemp(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
