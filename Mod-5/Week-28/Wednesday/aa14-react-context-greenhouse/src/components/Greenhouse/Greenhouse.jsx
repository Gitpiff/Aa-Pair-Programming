import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';
import { useClimateTheme } from '../../context/ClimateContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
 const { themeName } = useTheme();
// console.log(themeName, "THEME NAME")
  return (
    <section>
      <img  className='greenhouse-img'
            src={themeName === 'day' ? dayImage: nightImage}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
      
    </section>
  );
}

export default Greenhouse;
