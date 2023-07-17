import './App.css';
import { Route, Routes } from "react-router-dom";
import Currencies from './components/Currencies';
import Mainn from './components/Mainn';
import Price from './components/Price';
import Nav from './components/Nav';


function App() {
// We will use the Route component, path attribute, and element attribute to specify each route.
return (
  <div className="App">
    <Nav />
    <Routes>
      <Route path="/" element={<Mainn/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/price" element={<Price/>}/>
      <Route path="/price/:symbol" element={<Price/>}/>
    </Routes>
  </div>
);
}
export default App
