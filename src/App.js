//npm i react-router-dom@5.3.4
//npm install react-bootstrap bootstrap
//npm i react-infinite-scroll-component
//npm i react-top-loading-bar

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import BackToTopButton from './components/BackToTopButton';

const App = () => {
  let pageSize = 9;
  let apikey = "2f7fdd29a39e4ba59c0013028469f191";
  let country = 'in'
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
  const [articles, setArticles] = useState([0]);


  const toggleMode = () => {
    const currentMode = localStorage.getItem('mode');
    const newMode = currentMode === 'dark' ? 'light' : 'dark';
    localStorage.setItem('mode', newMode);
    setMode(newMode);
    document.body.style.background = newMode === 'dark' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';
  };



  return (
    <div>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} articles={articles} setArticles={setArticles} />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={country} category="general" head="" mode={mode} articles={articles} setArticles={setArticles} /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={country} category="business" head=": Business" articles={articles} setArticles={setArticles} /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={country} category="entertainment" head=": Entertainment" articles={articles} setArticles={setArticles} /></Route>
          <Route exact path="/general"><News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={country} category="general" head=": General" articles={articles} setArticles={setArticles} /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={country} category="health" head=": Health" articles={articles} setArticles={setArticles} /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={country} category="science" head=": Science" articles={articles} setArticles={setArticles} /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={country} category="sports" head=": Sports" articles={articles} setArticles={setArticles} /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apikey={apikey} pageSize={pageSize} country={country} category="technology" head=": Technology" articles={articles} setArticles={setArticles} /></Route>
        </Switch>
        <BackToTopButton />
      </Router>
    </div>
  )
}

export default App