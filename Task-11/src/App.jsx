import { BrowserRouter, Route, Routes } from 'react-router-dom' ; 
import Layout from './Pages/Layout' ; 
import './App.css' ; 
import Body from './Components/Body/Body';
function App() {

  return (
    <main>
        
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
         
      </Route>
    </Routes>
    </BrowserRouter>
    <Body> </Body>
   </main>
    )
}

export default App
