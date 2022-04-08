import './App.css';
import { useState, useEffect, useRef } from "react"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
// data
import sections from './data/sections.json';
// components
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SectionPage from './pages/SectionPage'
import { Container } from 'react-bootstrap';

function App() {
  // refs
  let firstRender = useRef(true)

  // states
  const [articles, setArticles] = useState([])
  const [articleType, setArticleType] = useState('')

  // let pattern = new RegExp(value, 'gi')
  //   props.filterArticles((a)=>(pattern.test(a)), 'title', value)

  // event handlers
  // filters articles by title given input from search bar
  // if search bar empty, resets articles on page
  const filterArticles = (text) => {
    if (text === '') {
      getArticles(articleType)
    } else {
      let pattern = new RegExp(text, 'gi')
      setArticles(articles.filter((article) => {
        return pattern.test(article.title)
      }))
    } 
  }

  // sends get request to get func based on specific url page
  // does not fire on component mounting
  useEffect(()=> {
    if (!firstRender.current){
      getArticles(articleType)
    } else {
      firstRender.current = false
    }
  }, [articleType])
  
  // gets articles via axios request based on article type
  const getArticles = (type) => {
    axios.get(`https://hacker-news.firebaseio.com/v0/${type}.json`)
      .then((response)=>{ 
        const promises = []
        for (let i=0; i<12; i++){
          promises.push(axios.get(`https://hacker-news.firebaseio.com/v0/item/${response.data[i]}.json`))
        }
        Promise.all(promises).then((responses)=>{
          setArticles(responses.map((response)=>{
            return response.data
          }))
        })
      })
  }

  // renders
  return (
    <div id="main-body">
      <AppNav navItems={sections} filterArticles={filterArticles}/>
      <Container id="main-content" className="my-4 p-3">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage articles={articles} setArticleType={setArticleType}/>} />
            <Route 
              path="/sections/:sectionName" 
              element={<SectionPage 
                articles={articles} 
                setArticleType={setArticleType} 
                sections={sections}/>}
            />
            <Route path="/signup" element={<Signup appState={appState} setAppState={setAppState}/>} />
            <Route path="/articles/:articleID" element={<ArticlePage />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;

