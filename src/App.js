import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Calander from './Pages/Calander/Calander';
import Footer from './Pages/Shared/Footer';
import Todo from './Pages/Todo/Todo';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calander" element={<Calander />} />
        <Route path="todo" element={<Todo />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
