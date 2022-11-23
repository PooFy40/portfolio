import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Education from './components/Education/Education';
import Interest from './components/skills/Interest'
import {db , auth} from './firebase';

const App = ()=> {

   const [student,setStudent] = useState([])
  //  const [name, setName] = useState(null)
  const [data, setData] = useState([])
   useEffect(()=>{
    console.log("test")

    db.collection('mydata')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc=>{
        const port = doc.data()
        // name = data.name;
        setData(port)
       
      })
      // console.log(student)
      // console.log(snapshot)
    })
    .catch(error => console.log(error))

   },[])
    return (
      <Router>
        
        <div className="App">
          <div className="side">
            <nav className="navbar side navbar-expand-lg navbar-light p-0" >
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" style={{ zIndex: '1' }}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Sidebar name = {data.name} email = {data.email}/>
              </div>
            </nav>
          </div>
          <div className="main">
            <div>

            </div>
            <About disc={data.disc} disc2={data.disc2} />
            <Interest  top1={data.top1} top1disc={data.top1disc} top2={data.top2} top2disc={data.top2disc} top3={data.top3} top3disc={data.top3disc}  />
            <Education expdate={data.expdate} edudate={data.edudate} highdate={data.highdate} expdisc = {data.expdisc} coll={data.coll} edudisc={data.edudisc} highedu={data.highedu} intern={data.intern} />
          </div>
        </div>
      </Router>
    );
  }
// }

export default App;
