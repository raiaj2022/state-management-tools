import '../styles/globals.css';
import React, {useEffect} from 'react';
import { FetchContext } from '../context/FetchContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [promise, setPromise] = useState(null);

  useEffect(() => {
    setPromise(fetch('https://rickandmortyapi.com/api/character').then((res) => res.json()))
  }, [setPromise]);

  return (
    <FetchContext.Provider value={{promise}}>
      <Component {...pageProps} />
    </FetchContext.Provider>
  );
}

export default MyApp
