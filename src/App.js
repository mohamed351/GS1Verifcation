import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Serial from "./pages/Serial";
function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/serial" element={<Serial/>} />
   </Routes>
   </>
  );
}

export default App;
