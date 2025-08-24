
import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Outlet, } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators' ;
import AddCreator from './pages/AddCreator';


function Layout() {
  
  
  return (
    <>
    
    <div className="layout-outerbox">
        <div className='layout-arrange'>
            <div>
              <h1 className="arrange-title">CreatorVerse</h1>
            </div>
           
            <div className="arrange-buttons">
                <Link to ='/ShowCreators'><button className="creator-button view-all" >View all creators</button></Link>
                <Link to ='/AddCreator'><button className="creator-button add-all" >Add a creator </button></Link>
            </div>
            
        </div>

    </div>
    <Outlet/>
   
    </>
  )
}

export default Layout;
