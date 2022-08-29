// import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//export default class App extends Component 
const App = () =>{
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  

  //render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={5}
        color='#f11946'
        progress={progress}
      />
          <Routes>
            <Route exact path="/" element=            {<News setProgess = { setProgress}  apiKey={ apiKey} key="general" pageSize = { pageSize} country = "in" category = 'general' /> } />
            <Route exact path="/business"  element=   {<News setProgess = { setProgress}  apiKey={ apiKey} key="business" pageSize = { pageSize} country = "in" category = 'business' />} />
            <Route exact path="/entertainment"element= {<News setProgess = { setProgress} apiKey={ apiKey}  key="entertainment" pageSize = { pageSize} country = "in" category = 'entertainment' />}  />
            <Route exact path="/general" element=     {<News setProgess = { setProgress}  apiKey={ apiKey} key="general" pageSize = { pageSize} country = "in" category = 'general' />} />
            <Route exact path="/health" element=      {<News setProgess = { setProgress}  apiKey={ apiKey} key="health" pageSize = { pageSize} country = "in" category = 'health' />} />
            <Route exact path="/science"element=      {<News setProgess = { setProgress}  apiKey={ apiKey} key="science" pageSize = { pageSize} country = "in" category = 'science' />} />
            <Route exact path="/sports"element=       {<News setProgess = { setProgress}  apiKey={ apiKey} key="sports" pageSize = { pageSize} country = "in" category = 'sports' />} />
            <Route exact path="/technology" element=   {<News setProgess = { setProgress} apiKey={ apiKey}  key="technology" pageSize = { pageSize} country = "in" category = 'technology' />} />
          </Routes>
        </Router>
      </div>
    )
  //}
}

export default App;