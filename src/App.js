import me from './images/defaultProfilePic.jpg'
import './App.css';
import Header from './components/Header';
import React, {useState} from 'react'
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import ReactPortfolio from './components/Portfolio/ReactPortfolio';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  //React hook to handle showing content on the page
  const [showContent, setShowContent] = useState("Home");
  return (
    <div class="site-container">
      <Header setShowContent={setShowContent}/>
      {/* //ADD conditional rendering below */}
      {showContent === "Home" && <Home/>}
      {showContent === "Portfolio" && <Portfolio/>}
      {showContent === "ReactLink" && <ReactPortfolio/>}
    </div>
  )
}


