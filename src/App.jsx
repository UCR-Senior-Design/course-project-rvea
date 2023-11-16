import Login from './pages/Login';
import Student from './pages/Student';
import Error404 from './pages/Error404';
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />

        {/* should i have a navbar here bc its just for prof and student view? */}
        <Route path='/student' element={<Student />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
