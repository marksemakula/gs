import { useState } from "react";

const partners = [
  { id: 1, name: "DHIS",         logo: "/images/dhis.svg"            },
  { id: 2, name: "MDLG",         logo: "/images/mdlg.png"            },
  { id: 3, name: "Stars Align",  logo: "/images/starsalign.png"      },
  { id: 4, name: "K Safaris",    logo: "/images/ksafaris.png"        },
  { id: 5, name: "GOU",          logo: "/images/gou.png"             },
  { id: 6, name: "Visit Uganda", logo: "/images/visitug.png"         },
  { id: 7, name: "MoES",         logo: "/images/MoES1.png"                                          },
  { id: 8, name: "Buganda",      logo: "/images/Flag_of_Buganda.svg"                                },
  { id: 9, name: "SHE IS AI",    logo: "/images/SHE+IS+AI-Logo-white-trans+(500+x+140+px).png"     },
  { id: 10, name: "WinRise",     logo: "/images/winrise.ico"                                        },
  { id: 11, name: "MTN",         logo: "/images/mtn.jpeg"                                           },
  { id: 12, name: "Airtel",      logo: "/images/airtel.png"                                         },
];

const track = [...partners, ...partners, ...partners, ...partners];

const PartnerCarousel = () => {
  const [paused, setPaused] = useState(false);

  return (
    <div className="bg-gray-100 py-12 overflow-hidden">
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div
          className="flex w-max"
          style={{
            animation: "partner-marquee 30s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            willChange: "transform",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {track.map((partner, index) => (
            <div
              key={partner.id + "-" + index}
              className="flex flex-col items-center justify-center flex-shrink-0 w-32 mr-8"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/80?text=" + partner.name;
                }}
              />
              <p className="text-center mt-2 text-sm font-medium text-gray-600">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partner-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </div>
  );
};

export default PartnerCarousel;
