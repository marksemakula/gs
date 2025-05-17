import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Good Shepherd School - Kawaala</h3>
            <p className="text-sm">Developing character strength and academic excellence since 2002.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/enroll" className="hover:text-primary">Enroll</Link></li>
              <li><Link to="/donate" className="hover:text-primary">Donate</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> Kawaala, Lubaga North, Kampala, Uganda
              </li>
              <li className="flex items-center gap-2">
                <FaPhone /> +256 782 981 338
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> info@goodshepherd.ac.ug
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-primary"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-primary"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Good Shepherd School - Kawaala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;