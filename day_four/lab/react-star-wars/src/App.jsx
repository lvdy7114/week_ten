import { useEffect, useState } from 'react';
import './App.css';
import StarshipCard from './StarshipCard';
import getAllStarships from './services/sw-api';
import Heading from './Heading';



const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const starshipsData = await getAllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.log(error)
      }
    };

    fetchStarships();
  }, []);
  
  return (
    <div>
      <Heading />
   <div className='card-container'>
   {starships.map((starship) => (
   <StarshipCard key={starship.name} name={starship.name} />
  ))}
   </div>
   </div>
  );
};


export default App
