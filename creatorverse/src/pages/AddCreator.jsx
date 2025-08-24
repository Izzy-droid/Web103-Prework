
import React from 'react';
import '../App.css';
//import {BrowserRouter, Routes, Route, useRoutes} from 'react-router-dom';
import Layout from '../layout.jsx';
import {supabase} from '../client.js';
import { Outlet } from 'react-router-dom';


function AddCreator() {

  const addCreator = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name?.value || ''; 
    const url = form.elements.url?.value || '';
    const description = form.elements.description?.value || '';
    const imageURL = form.elements.imageURL?.value || '';

    const {error} = await supabase 
    .from('creators') 
    .insert([{
      name,
      url,
      description,
      imageURL
    }])

    if (error) {
      console.log('Error adding creator:', error);
    } 
    if (!name || !description || !url || !imageURL) {
      console.log('All fields are required.');
      return;
    }
    else {
      console.log('Creator added successfully');
    }
  }

  return (
    <>
    
   <Outlet/>
    <div>
        <div>
          
          <div className="outer-shell">
            <div className='inner-container'>

            </div>
            <p>
             
            </p>

            <div className='form-arrange'>
              <form onSubmit={addCreator}  >
              <div class='add-header'>
                <p>Add a Creator!</p>
              </div>
                <label> 
                  <p className='form-p'>Name:</p>
                  <input type="text" name='name' required  id='add-inputs'/>

                  <p className='form-p'>url:</p>
                  <input type="text" name='url'required id='add-inputs'/>

                  <p className='form-p'>Description:</p>
                  <input type="text" name='description'required id='add-inputs'/>

                  <p className='form-p'>Image (URL):</p>
                  <input type="text" name='imageURL' required id='add-inputs'/>

                </label>
                <div className='submit-btn'>
                  <input type="submit"  value='submit' className='Add-submitBtn'/>
                </div>
                
              
              </form>
            </div>
          </div>
            
        </div>

    </div>
   
     
    </>
  )
}

export default AddCreator;
