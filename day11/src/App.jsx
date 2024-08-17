import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1"; 
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"


import './App.css'

function App() {

  return (
    <>
      <BrowserRouter> 
      <Routes> 
        <Route index element={<Home/>} /> 
<Route path="/Page1" element={<Page1/>}> </Route>
<Route path="/Page2" element={<Page2/>}> </Route>
<Route path="/Page3" element={<Page3/>}> </Route>


       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
