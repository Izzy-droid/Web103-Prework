import React from 'react';
import '../App.css';
import { supabase } from '../client.js';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function EditCreator() {
  const [creator, setCreator] = useState(null);
  const [error, setError] = useState(null);
  const {id}  = useParams();
  const editCreator = async (e) => {
      e.preventDefault();
      const form = e.target;
  
      const name = form.elements.name?.value || ''; 
      const url = form.elements.url?.value || '';
      const description = form.elements.description?.value || '';
      const imageURL = form.elements.imageURL?.value || '';
      if (!name || !description || !url || !imageURL) {
        console.log('All fields are required.');
        return;
      }
      const {error} = await supabase 
      .from('creators') 
      .update([{
        name,
        url,
        description
      }])
      .eq('id', id);
  
      if (error) {
        console.log('Error adding creator:', error);
      } 
      else {
        console.log('Creator edited successfully');
      }
    }
    
    const deleteCreator = async () => {
  
      const {error} = await supabase 
      .from('creators') 
      .delete()
      .eq('id', id);
      
  
      if (error) {
        console.log('Error adding mob:', error);
      } 
      else {
        console.log('Creator added successfully');
        window.location = '/';
      }
    }
    useEffect(() => {
      const fetchCreator = async () => {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single(); 
  
        if (error) {
          console.error('Error fetching creator:', error);
        } else {
          setCreator(data); // Store the fetched data in state
        }
      };
  
      fetchCreator();
    }, [id]);
    
    //const filteredId= creator.find((creator) => String(creator.id) == String(id)); 
    


  return (
    <>
    
    <div className='view-card'>
      <div className='form-arrange'>
        <form onSubmit={editCreator}>
          <div className='add-header'>
            <p>Edit a Creator</p>
          </div>
          <label>
            <p className='form-p'>Name:</p>
            <input type="text" name='name'  id='add-inputs' placeholder={creator?.name || 'bruh idk' }/>

            <p className='form-p'>URL:</p>
            <input type="text" name='url'  id='add-inputs' placeholder={creator?.url || 'bruh idk' }/>

            <p className='form-p'>Description:</p>
            <input type="text" name='description'  id='add-inputs' placeholder={creator?.description || 'bruh idk' }/>
          </label>
          <div className='submit-btn' id='edit-btns'>
            <input type="submit" value='Submit' className='Add-submitBtn' id='Edit-submitBtn'/>
            <input type='button' value='Delete' className='Edit-deleteBtn' onClick ={deleteCreator}/>
          </div>
        </form>
      </div>
    </div>
    <Outlet />
  </>
   
  )
}

export default EditCreator;
