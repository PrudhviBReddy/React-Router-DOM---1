import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import PageNotFound from './components/PageNotFound';
import Tasks from './components/Tasks';
import Leaves from './components/Leaves';
import Messages from './components/Messages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/tasks" element={<Tasks/>}></Route>
      <Route path="/leaves" element={<Leaves/>}></Route>
      <Route path="/messages" element={<Messages/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
