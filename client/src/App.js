import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Worker_Home from './components/WorkerHome';
import WorkerJob from './components/WorkerJob';
import WorkerAbout from './components/WorkerAbout';
import WorkerContact from './components/WorkerContact';
import Index from './components/Index';
import AAState from './context/AAState';
import WorkerProfile from './components/WorkerProfile';


function App() {
  return (
    <>
    <AAState>
    <BrowserRouter>
      <Routes>
        <Route exact path="/workerhome" element={<Worker_Home />}/>
        <Route exact path="/" element={<Index />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/workerjob" element={<WorkerJob />}/>
        <Route exact path="/workerabout" element={<WorkerAbout />}/>
        <Route exact path="/workercontact" element={<WorkerContact />}/>
        <Route exact path="/workerprofile" element={<WorkerProfile />}/>
      </Routes>
    </BrowserRouter>
    </AAState>
    </>
  );
}

export default App;
