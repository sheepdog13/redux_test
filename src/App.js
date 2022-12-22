import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Board from './Page/Board';
import BoardPage from './Page/BoardPage';
import BoardWirteForm from './Page/BoardWirteForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/board' element={<Board />}></Route>
        <Route path='/board/:id' element={<BoardPage />}></Route>
        <Route path='/board/modifyform' element={<BoardWirteForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
