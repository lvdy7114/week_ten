import './App.css';
import { Route, Routes } from "react-router-dom";
import Currencies from './components/Currencies';
import Main from './components/Main';
import Price from './components/Price';

function App() {
// We will use the Route component, path attribute, and element attribute to specify each route.
return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/price" element={<Price/>}/>
    </Routes>
  </div>
);
}
export default App
