import './App.css';
import { useState, useEffect, useRef } from "react"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchArticlesBySection } from "./api/ArticlesAPI.js"
import { whoAmI } from './utils/utils.js'
// data
import sections from './data/sections.json';
// components
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SectionPage from './pages/SectionPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Preferences from './pages/Preferences';
// styling
import { Container } from 'react-bootstrap';

function App() {
  // refs
  let firstRender = useRef(true)

  // states
  const [articles, setArticles] = useState([])
  const [articleType, setArticleType] = useState('')
  const [user, setUser] = useState(null)

  // effects
  useEffect( async () => {
    if (!firstRender.current){
      setArticles(await fetchArticlesBySection(articleType))
    } else {
      firstRender.current = false
    }
  }, [articleType])

  useEffect(()=> {
    whoAmI(setUser)
  },[user])

  // event handlers
  const filterArticles = async (text) => {
    if (text === '') {
      setArticles(await fetchArticlesBySection(articleType))
    } else {
      let pattern = new RegExp(text, 'gi')
      setArticles(articles.filter((article) => {
        return pattern.test(article.title)
      }))
    } 
  }
  
  // renders
  return (
    <div id="main-body">
      <AppNav user={user} navItems={sections} filterArticles={filterArticles}/>
      <Container id="main-content" className="my-4 p-3">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage articles={articles} setArticleType={setArticleType} user={user}/>} />
            <Route path="/sections/:sectionName" element={<SectionPage articles={articles} setArticleType={setArticleType} sections={sections}/>}/>
            <Route path="/articles/:articleID" element={<ArticlePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
            <Route path="/preferences" element={<Preferences />}></Route>
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;

