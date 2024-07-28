

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('https://hotels-4-hgrb.onrender.com/api/hotels/');
        setHotels(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error loading hotels: {error.message}</div>;
  }

  return (
    <div className="container mx-auto mt-5 font-sans">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Hotels</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Name</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Description</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Location</th>
              <th className="py-3 px-4 bg-gray-300 font-bold text-gray-800">Price</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map(hotel => (
              <tr key={hotel.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4 text-gray-700 font-bold">{hotel.name}</td>
                <td className="py-3 px-4 text-gray-700 font-semibold">{hotel.description}</td>
                <td className="py-3 px-4 text-gray-700">{hotel.location}</td>
                <td className="py-3 px-4 text-gray-700">{hotel.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelList;
