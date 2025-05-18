
import React, { useState } from 'react';
import axios from 'axios';

interface BusFormData {
  fromLocation: string;
  toLocation: string;
  startDate: string;
  endDate: string;
  price: number;
  seatStatus: "Available" | "Booked";
  imageFile: File | null;
  busDetails: string;
}

const AddBus: React.FC = () => {
  const [formData, setFormData] = useState<BusFormData>({
    fromLocation: '',
    toLocation: '',
    startDate: '',
    endDate: '',
    price: 0,
    seatStatus: 'Available',
    imageFile: null,
    busDetails: ''
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' ? parseFloat(value) : value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, imageFile: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const data = new FormData();
      data.append('fromLocation', formData.fromLocation);
      data.append('toLocation', formData.toLocation);
      data.append('startDate', formData.startDate);
      data.append('endDate', formData.endDate);
      data.append('price', formData.price.toString());
      data.append('seatStatus', formData.seatStatus);
      data.append('busDetails', formData.busDetails);

      if (formData.imageFile) {
        data.append('imageFile', formData.imageFile);
      }

      const response = await axios.post("https://682a21d9ba603643e6fcef39--fascinating-hamster-38f55b.netlify.app/.netlify/functions/api/v2/addBus", data, {
withCredentials:true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Bus added:', response.data);
      setSuccess(true);

      setFormData({
        fromLocation: '',
        toLocation: '',
        startDate: '',
        endDate: '',
        price: 0,
        seatStatus: 'Available',
        imageFile: null,
        busDetails: ''
      });

    } catch (err) {
      console.error('Error:', err);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Add New Bus</h2>

      {success && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md text-center">
          ✅ Bus added successfully!
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md text-center">
          ❌ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fromLocation" className="block mb-1 text-sm font-medium text-gray-700">From Location</label>
            <input
              id="fromLocation"
              name="fromLocation"
              value={formData.fromLocation}
              onChange={handleInputChange}
              required
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter departure city"
            />
          </div>

          <div>
            <label htmlFor="toLocation" className="block mb-1 text-sm font-medium text-gray-700">To Location</label>
            <input
              id="toLocation"
              name="toLocation"
              value={formData.toLocation}
              onChange={handleInputChange}
              required
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter destination city"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="startDate" className="block mb-1 text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="datetime-local"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              required
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block mb-1 text-sm font-medium text-gray-700">End Date</label>
            <input
              type="datetime-local"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              required
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="price" className="block mb-1 text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              value={formData.price}
              onChange={handleInputChange}
              required
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="seatStatus" className="block mb-1 text-sm font-medium text-gray-700">Seat Status</label>
            <select
              id="seatStatus"
              name="seatStatus"
              value={formData.seatStatus}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="imageFile" className="block mb-1 text-sm font-medium text-gray-700">Bus Image</label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="busDetails" className="block mb-1 text-sm font-medium text-gray-700">Bus Details</label>
          <textarea
            id="busDetails"
            name="busDetails"
            rows={4}
            value={formData.busDetails}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter bus amenities, type, etc."
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 text-white font-medium rounded-md ${
              loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {loading ? 'Submitting...' : 'Add Bus'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBus;
