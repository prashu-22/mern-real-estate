import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/Signin";
import Header from "./components/Header";


export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/sign-in" Component={SignIn}/>
      <Route path="/sign-up" Component={SignUp}/>
      <Route path="/about" Component={About}/>
      <Route path="/profile" Component={Profile}/>
      <Route Component={NotFound}/>
  </Routes>
  
  </BrowserRouter>
}
