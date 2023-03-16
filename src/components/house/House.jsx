import React, { useEffect, useState } from "react";
import supabase from "../../supabase/SupabaseConfig";

const Houses = () => {
  const [fetchError, setFetchError] = useState(null);
  const [houses, sethouses] = useState(null);

  useEffect(() => {
    const fetchHouses = async () => {
      const { data, error } = await supabase.from("Houses").select(" * ");

      if (error) {
        setFetchError("Could not fetch Houses");
        sethouses(null);
        console.log(error);
      }
      if (data) {
        sethouses(data);
        setFetchError(null);
      }
    };



    fetchHouses();
  }, []);
  return (
    <div className="w-full">
      <div className="px-3 md:px-24 py-5">
        {fetchError && <p>{fetchError}</p>}

        {
          houses && (
            <div>
              {
                houses.map(Houses =>(
                  <p>{Houses.title}</p>
                ))
              }
            </div>
          )
        }
      </div>
    </div>

  );
};

export default Houses;
 