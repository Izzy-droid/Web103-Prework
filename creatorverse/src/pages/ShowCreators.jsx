import React from 'react';
import {useState, useEffect} from 'react';
import Layout from '../layout.jsx';
import '../App.css';
import { useParams } from 'react-router-dom';
import { Outlet} from 'react-router-dom';
import {supabase} from '../client.js';
import { Link } from 'react-router-dom';

function ShowCreators() {
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
          console.log('Fetched creators:', data); // Log the fetched data
          setCreators(data); // Update state with fetched data
        }
      };
  
      fetchData();
    }, []);

    
    
  
  return (
    <>
    <Outlet/>
    
    
        <div className='check'>
        
          
          
            {error && <p>Error loading Creators: {error.message}</p>}
              {creators.map((creator) => (
                <div key={creator.id} className="outer-cards">
                  {/*<img  src={creator.imageURL} alt={creator.name} />*/}
                  
                  
          
                  <h3 className='view-attri'><a href={creator.url}>{creator.name}</a></h3>
                  <div className='icon-arrange'>

                    <Link to= {`/ViewCreator/${creator.id}`}><img src='/information.png' className ='view-icons'/></Link>
                    
                    <Link to={`/EditCreator/${creator.id}`}><img src='/editing.png' className ='view-icons'/></Link>
                  </div>
                 
                  <p className='view-attri'>{creator.description}</p>
                  
                  
                </div>
              ))}
          </div>
           
       
          
    
     
     
    </>
  )
}

export default ShowCreators

