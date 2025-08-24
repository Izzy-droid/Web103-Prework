import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './layout.jsx';
import {supabase} from './client.js';
import './App.css';
import {useState} from 'react';
import ShowCreators from './pages/ShowCreators.jsx';
import ViewCreator from './pages/ViewCreator.jsx';
import AddCreator from './pages/AddCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';

function App() {
  const [data, setData] = useState([]);


  return (
    <>
    
    <Router>
      <Routes>
       
        <Route  path ="/" element= { <Layout/> }>
          <Route path ="/AddCreator" element = {<AddCreator/>} />
          

          <Route path ="/ShowCreators" element= { <ShowCreators/>}/>
            <Route path ="/ViewCreator/:id" element= { <ViewCreator/>}/>
            <Route path="/EditCreator/:id" element = {<EditCreator/>}/>
          
   
        </Route>

      </Routes>   
    </Router>
    
   
    
     
    </>
  );
}

export default App;
