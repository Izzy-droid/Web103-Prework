
import React from 'react';
import {useState, useEffect} from 'react';
import Layout from '../layout.jsx';
import '../App.css';
import { useParams } from 'react-router-dom';
import { Outlet} from 'react-router-dom';
import {supabase} from '../client.js';




function ViewCreator() {
  const [creators, setCreators] = useState([]);
  const [error, setError] = useState(null);
 
  
  useEffect(() => {
      const fetchData = async () => {
        const { data, error } = await supabase
          .from('creators') 
          .select('*') 
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          setCreators(data); // Update state with fetched data
        }
      };
  
      fetchData();
    }, []);

    const {id} = useParams();
    const filteredId= creators.find((creator) => creator.id == id); 
  return (
    <>
    
    
        <div className='check'>
        
          
          
          
        {error && <p>Error loading Creator: {error.message}</p>}
        {filteredId ? (
          <div className="view-card" id='view-box'>
            <h3 className="view-attri" id='view'>{filteredId.name}</h3>
            <div className="icon-arrange">
              <a href={filteredId.url} >
                <img src="/youtube.png" alt="YouTube Icon" id='creator-iconYT'/>
              </a>
            </div>
            <p className="view-attri" id='view'>{filteredId.description}</p>
          </div>
        ) : (
          <p>Creator not found.</p>
        )}
              <Outlet/>
          </div>
            
       
          
    
     
     
    </>
  )
}

export default ViewCreator;
