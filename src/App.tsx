import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './style/GlobalStyle';

function App() {

  const title: string = 'Meu Blog - Gevolg';

  return (
    <>
      <Outlet/>
      <GlobalStyle/>
    </>
  )
}

export default App;
