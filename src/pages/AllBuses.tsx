import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Bus {
  _id: string;
  fromLocation: string;
  toLocation: string;
  startDate: string;
  endDate: string;
  price: number;
  seatStatus: string;
  imageFile?: string;
  busDetails: string;
}

const AllBuses: React.FC = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
console.log(buses)
  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await axios.get('https://682a30ee1e1b00bd62d68cba--fascinating-hamster-38f55b.netlify.app/.netlify/functions/api/v2/AllBuses');
        setBuses(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch buses.');
      } finally {
        setLoading(false);
      }
    };

    fetchBuses();
  }, []);

  if (loading) return <div className="text-center py-10">Loading buses...</div>;
  if (error) return <div className="text-red-500 text-center py-4">{error}</div>;
  return (
      <div className="max-w-6xl mx-auto p-4 mt-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Available Buses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {buses.map((bus) => (
    
            <div
            key={bus._id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
            
        
            
              <img
                src={bus.imageFile}
                alt="Bus"
                className="w-full h-48 object-cover"
              />
          
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {bus.fromLocation} → {bus.toLocation}
              </h3>
              <p className="text-sm text-gray-500">
                🕒 {new Date(bus.startDate).toLocaleString()} → {new Date(bus.endDate).toLocaleString()}
              </p>
              <p className="text-sm text-gray-700">{bus.busDetails}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-blue-600 font-semibold">PKR {bus.price}</span>
                <span
                  className={`text-sm px-2 py-1 rounded ${
                    bus.seatStatus === 'Available'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {bus.seatStatus}
                </span>
              </div>
              <Link
                to="/landingPage"
                className="block text-center bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 shadow transition duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBuses;
