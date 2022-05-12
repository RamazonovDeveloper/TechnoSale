import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Main from './components/mainPage/Main';
import Reg from './components/reg/Reg';

function App() {
  return (
    <div className="App">
      salomDunyo
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Reg/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
