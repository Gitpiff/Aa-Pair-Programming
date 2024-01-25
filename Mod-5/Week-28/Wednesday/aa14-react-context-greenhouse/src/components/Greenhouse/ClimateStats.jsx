import './ClimateStats.css';
import { useClimateTheme } from '../../context/ClimateContext';

function ClimateStats() {
const { temperature, setTemperature, humidity, setHumidity } = useClimateTheme();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
