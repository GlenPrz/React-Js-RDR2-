
import React from 'react';
import Rdr2_Banner from './components/banner.jsx';
import NavBar from './components/NavBar.jsx';
import Introduction from './components/Introduction.jsx';
import Characters from './components/characters.jsx';
function App() {

  return (
    <>
      <NavBar />
      <Rdr2_Banner />
      <Introduction />
      <Characters />
    </>
  )
}
export default App;
