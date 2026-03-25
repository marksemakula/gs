import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareYoutube,
  FaSquareXTwitter,
  FaTelegram,
  FaTiktok,
  FaDiscord,
  FaSlack,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa6';

const socials = [
  { icon: FaSquareFacebook, label: "Facebook",  href: "#" },
  { icon: FaSquareInstagram, label: "Instagram", href: "#" },
  { icon: FaSquareYoutube,  label: "YouTube",   href: "#" },
  { icon: FaSquareXTwitter, label: "X",         href: "#" },
  { icon: FaTelegram,       label: "Telegram",  href: "#" },
  { icon: FaTiktok,         label: "TikTok",    href: "#" },
  { icon: FaDiscord,        label: "Discord",   href: "#" },
  { icon: FaSlack,          label: "Slack",     href: "#" },
  { icon: FaWhatsapp,       label: "WhatsApp",  href: "#" },
  { icon: FaLinkedin,       label: "LinkedIn",  href: "#" },
];

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
                <FaEnvelope /> admin@goodshepherd.ac.ug
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  className="hover:text-primary transition-colors duration-200"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 flex flex-wrap items-center justify-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Good Shepherd School - Kawaala | inzozi - inzozi.co . All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-300 text-sm">Powered by</span>
            <img src="/images/Inzozi-grayscale.png" alt="Inzozi Logo" className="h-10 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;