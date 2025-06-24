const Footer = () => {
  return (
    <footer
      className="bg-gwb-black border-t-4 py-12"
      style={{ borderTopColor: "#a3e635" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Slogan */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/lovable-uploads/dc15696c-1384-4203-bf5a-196fa1ed90b9.png"
                alt="Green White Boys Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-gwb-white font-oswald font-semibold text-xl">
                GREEN WHITE BOYS
              </span>
            </div>
            <p className="text-gwb-green mb-4 font-semibold">
              Ištikimybė iki galo
            </p>
            <p className="text-sm text-gwb-white">
              Oficialus Žalgirio Kauno fanų klubas
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald text-lg font-semibold text-gwb-white mb-4">
              Nuorodos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gwb-white hover:text-gwb-green transition-colors"
                >
                  Apie GWB
                </a>
              </li>
              <li>
                <a
                  href="#songs"
                  className="text-gwb-white hover:text-gwb-green transition-colors"
                >
                  Dainos
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className="text-gwb-white hover:text-gwb-green transition-colors"
                >
                  Parduotuvė
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gwb-white hover:text-gwb-green transition-colors"
                >
                  Galerija
                </a>
              </li>
              <li>
                <a
                  href="#contribute"
                  className="text-gwb-white hover:text-gwb-green transition-colors"
                >
                  Prisidėk
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-oswald text-lg font-semibold text-gwb-white mb-4">
              Kontaktai
            </h4>
            <div className="space-y-2 text-gwb-white">
              <p>info@gwb.lt</p>
              <p>Žalgirio arena, Kaunas</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/greenwhiteboys/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gwb-white hover:text-gwb-green transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@GreenWhiteBoys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gwb-white hover:text-gwb-green transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="https://www.facebook.com/greenwhiteboys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gwb-white hover:text-gwb-green transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gwb-green pt-8 text-center">
          <p className="text-gwb-white text-sm">
            © 2025 Green White Boys. Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
