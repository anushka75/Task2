import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import Header from "./components/Header";
//import Tree from "./components/Tree/Tree";

const LazyHome = React.lazy(()=> import('./components/Home/Home'));
const LazyTree = React.lazy(()=> import('./components/Tree/Tree'));


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <React.Suspense fallback={<Spinner/>}>
        <Routes>
            <Route exact path="/" element={<LazyHome />} />
            <Route exact path="/:query" element={<LazyTree/>} />
        </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}
export default App;
