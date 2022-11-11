import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import Results from "./components/Results";
import  {STARTWithRoter}from "./components/Start";

function App() {
  return (
    <BrowserRouter>
    
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/start/instrutions" element={<Instructions/>}/>
        <Route path="/start" element={<STARTWithRoter/>}/>
        <Route path="/results" element={<Results/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
