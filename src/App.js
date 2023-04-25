import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route,

}from "react-router-dom";

export default class App extends Component {
  // c ="jhon"

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  api=process.env.REACT_APP_NEWS_API;


  render() {
   
    return (
      <Router><LoadingBar
      height={3}
      color='#f11946'
      progress={this.state.progress}
    
     />
        <NavBar/>
        <Routes>
          <Route path='/' element={<News setpro={this.setProgress} api={this.api} key="general" pageSize={6} country='in' catagory='general'/>}></Route>
          <Route path='/Home' element={<News setpro={this.setProgress} api={this.api} key="general1" pageSize={6} country='in' catagory='general'/>}></Route>
          <Route path='/Business' element={<News setpro={this.setProgress} api={this.api} key="business" pageSize={6} country='in' catagory='business'/>}></Route>
          <Route path='/Entertainment' element={<News setpro={this.setProgress} api={this.api} key="entertainment" pageSize={6} country={'in'} catagory={'entertainment'}/>}/>
          <Route path='/Health' element={<News setpro={this.setProgress} api={this.api} key="health'" pageSize={6} country={'in'} catagory={'health'}/>}/>
          <Route path='/Science' element={<News setpro={this.setProgress} api={this.api} key="science" pageSize={6} country={'in'} catagory={'science'}/>}/>
          <Route path='/Sports' element={<News setpro={this.setProgress} api={this.api} key="sports" pageSize={6} country={'in'} catagory={'sports'}/>}/>
          <Route path='/Technology' element={<News setpro={this.setProgress} api={this.api} key="technology" pageSize={6} country={'in'} catagory={'technology'}/>}/>
        
        </Routes>
      </Router>
     
    )
  }
}
