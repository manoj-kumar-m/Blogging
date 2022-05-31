import './App.css';
// import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  const currentUser = true;
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
         
          <Route exact path="/posts" element={<Home />} />
           
          <Route exact path="/register" element= {currentUser ? <Home /> : <Register />}/>
 
          <Route exact path="/login" element={currentUser ? <Home /> : <Login />}/>
          <Route exact path="/post/:id" element={<Single />} />
         
          <Route path="/write" element={currentUser ? <Write /> : <Login />}/>
          <Route path="/settings" element= {currentUser ? <Settings /> : <Login />} />
         
        </Routes>
    </Router>
    </>
  );
}

export default App;
