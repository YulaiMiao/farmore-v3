import '../styles/globals.css'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import AppContext from '../components/AppContext';
config.autoAddCss = false; /* eslint-disable import/first */


function MyApp({ Component, pageProps }) {
  const [coffee, setCoffee] = useState('');
  // useEffect(() => {
  //    rootUrl = window.location.origin;
  // })
  // const rootUrl = window.location.origin;

  const selectedCoffee = {
    name: coffee,
    setCoffee,
  }
  return (
  <AppContext.Provider value={selectedCoffee}>
    <Component {...pageProps} />
  </AppContext.Provider>
  )
}

export default MyApp
