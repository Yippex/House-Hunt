import { useEffect, useState } from "react";
import supabase from "../../supabase/SupabaseConfig";
import { Link } from "react-router-dom";

const HouseList = () => {
  const [houses, setHouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchHouses() {
      const { data } = await supabase.from("Houses").select("*");
      setHouses(data);
    }
    fetchHouses();
  }, []);

  const filteredHouses = houses.filter((house) =>
    house.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="py-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">House Listings</h1>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-400 rounded-md py-2 px-4"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredHouses.map((house) => (
            <div
              key={house.id}
              className="bg-white shadow-md px-3 rounded-lg overflow-hidden"
            >
              <img
                src={house.image_url}
                alt=""
                className="w-full h-60 object-cover rounded-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{house.title}</h2>
                <p className="text-gray-700 mb-2">{house.location}</p>
                <p className="font-semibold text-xl text-gray-900">
                  ${house.price}
                </p>
                <p className="text-gray-500 mt-2">{house.description}</p>
                <Link
                  to={"/HouseDetails"}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseList;
