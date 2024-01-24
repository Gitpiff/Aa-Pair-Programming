import { createContext, useState } from 'react';
import horoscopesObj from '../data/horoscopes';
import { useContext } from 'react';

export const HoroscopeContext = createContext();

//Custom context hook
export const useHoroscopeContext = () => useContext(HoroscopeContext);

const HoroscopeProvider = props => {
  const [currentSign, setCurrentSign] = useState('Leo');
  const sign = horoscopesObj[currentSign];

  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;
