import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=>{
  const apiKey= process.env.REACT_APP_NEWS_API

  const[progress, setProgress]= useState(0);

    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={progress}
        />
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News setProgress={ setProgress}  apiKey={ apiKey} key="Technology" country={'us'} categary={'Technology'} pagesize ={10}/>} />
        <Route exact path="/Business" element={<News setProgress={ setProgress}  apiKey={ apiKey} key="Business" country={'us'} categary={'Business'} pagesize ={10}/>} />
        <Route exact path="/Entertainment" element={<News setProgress={ setProgress}  apiKey={ apiKey} key="Entertainment" country={'us'} categary={'Entertainment'} pagesize ={10}/>} />
        <Route exact path="/General" element={<News setProgress={ setProgress}  apiKey={ apiKey} key="General" country={'us'} categary={'General'} pagesize ={10}/>} />
        <Route exact path="/Health" element={<News setProgress={ setProgress}  apiKey={ apiKey} key="Health" country={'us'} categary={'Health'} pagesize ={10}/>} />
        <Route exact path="/Science" element={<News setProgress={ setProgress}  apiKey={ apiKey} key="Science" country={'us'} categary={'Science'} pagesize ={10}/>} />
        <Route exact path="/Sports" element={<News setProgress={ setProgress}  apiKey={ apiKey} key="Sports" country={'us'} categary={'Sports'} pagesize ={10}/>} />
        </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App