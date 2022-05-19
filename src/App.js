import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Main from './components/mainPage/Main';
import Main2 from './components/mainPage2/Main2';
import Reg from './components/reg/Reg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registraton' element={<Reg/>}/>
          <Route path='/main' element={<Main2/>}/>
        </Routes>
      </BrowserRouter>  

    </div>
  );
}

export default App;
