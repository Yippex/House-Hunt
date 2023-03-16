import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../../supabase/SupabaseConfig';

const HouseDetails = ({ houseId }) => {
  const [house, setHouse] = useState(null);

  useEffect(() => {
    async function fetchHouse() {
      const { data, error } = await supabase.from('Houses').select('*').eq('id', houseId).single();

      if (error) {
        console.error(error);
        return;
      }

      setHouse(data);
    }
    fetchHouse();
  }, [houseId]);

  if (!house) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={house.image_url} alt="" className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{house.title}</h2>
        <p className="text-gray-700 mb-2">{house.location}</p>
        <p className="font-semibold text-xl text-gray-900">${house.price}</p>
        <p className="text-gray-500 mt-2">{house.description}</p>
      </div>
    </div>
  );
};
 export default HouseDetails;