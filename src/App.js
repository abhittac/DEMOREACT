import Render from './components/Render';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
const App=()=>{
  return(
    <BrowserRouter>
    <Render/>
    </BrowserRouter>
  )
}
export default App;