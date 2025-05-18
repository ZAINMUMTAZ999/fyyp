
import { Link } from 'lucide-react';
import { FaBus, FaClock, FaMoneyBillWave, FaPhoneAlt } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Book Your Bus Ticket Online — Fast, Easy & Reliable
            </h1>
            <p className="text-lg mb-6">
              Compare routes, pick your seat, and travel with confidence. Pakistan’s #1 trusted bus booking platform.
            </p>
            <button>

            <Link
              to="/contactUs"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition"
              >
              Book Now
            </Link>
                </button>
          </div>
         
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Why Choose Us?</h2>
          <p className="text-gray-600">We make bus booking easy and affordable across Pakistan.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaBus className="text-3xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Easy Booking</h3>
            <p className="text-gray-600 mt-2">Book your bus seat within minutes with our user-friendly platform.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaClock className="text-3xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Real-time Schedules</h3>
            <p className="text-gray-600 mt-2">Live tracking and up-to-date departure information.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaMoneyBillWave className="text-3xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Affordable Fares</h3>
            <p className="text-gray-600 mt-2">Compare prices from multiple operators and save money.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaPhoneAlt className="text-3xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-gray-600 mt-2">Need help? Our team is always ready to assist you.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey Now</h2>
          <p className="text-gray-700 mb-6">
            Book your next bus ride with us and travel in comfort and style. No lines, no hassle.
          </p>
          
          <Link
            to="/contactUs"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Find a Bus
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <p>&copy; {new Date().getFullYear()} BusBooking — All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <a href="#faq" className="hover:underline">
              FAQ
            </a>
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
