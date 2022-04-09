import './App.css';
import { useState, useEffect, useRef } from "react"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchArticlesBySection } from "./api/ArticlesAPI.js"
// data
import sections from './data/sections.json';
// components
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SectionPage from './pages/SectionPage';
import Signup from './pages/Signup';
// styling
import { Container } from 'react-bootstrap';

function App() {
  // refs
  let firstRender = useRef(true)

  // states
  const [articles, setArticles] = useState([])
  const [articleType, setArticleType] = useState('')

  // effects
  useEffect( async () => {
    if (!firstRender.current){
      setArticles(await fetchArticlesBySection(articleType))
    } else {
      firstRender.current = false
    }
  }, [articleType])

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
      <AppNav navItems={sections} filterArticles={filterArticles}/>
      <Container id="main-content" className="my-4 p-3">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage articles={articles} setArticleType={setArticleType}/>} />
            <Route path="/sections/:sectionName" element={<SectionPage articles={articles} setArticleType={setArticleType} sections={sections}/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/articles/:articleID" element={<ArticlePage />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;

