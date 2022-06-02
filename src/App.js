import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import SideBar from './components/sideBar/SideBar';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/users/Users';
import About from './pages/about/About';
import "./app.scss"

function App() {
  return (
    <div className='app'>
       <Router>
      <SideBar/>
      <div className='appcontainer'>
        <NavBar />
       
          <Routes path='/'>
            <Route index element={<Dashboard />}/>
            <Route path='dashboard' element={<Dashboard />}/>
            <Route path='users' element={<Users />}/>
            <Route path='about' element={<About />}/>
          </Routes>
       
      </div>
      </Router>
    </div>
  );
}

export default App;
