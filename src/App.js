import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Serial from "./pages/Serial";
import BrowserRouter from 'react-router-dom/BrowserRouter'
function App() {
  return (
   <>
   <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<Home/>} /> 
      <Route path="/serial" element={<Serial/>} />
   </Routes>
   </>
  );
}

export default App;
