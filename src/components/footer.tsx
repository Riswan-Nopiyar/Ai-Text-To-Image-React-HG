import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Set the current year dynamically
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <section
      style={{ zIndex: 2147483647 }}
      className="fixed bottom-0 left-0 w-full bg-gray-800 text-white h-6 overflow-hidden"
    >
      {/* Container untuk item di footer */}
      <div className="flex items-center space-x-4 animate-marquee">
        <img
          src="https://avatars.githubusercontent.com/u/103617674?v=4"
          alt="Foto Profil 1"
          className="w-4 h-4 rounded-full"
        />
        <p className="text-sm font-semibold">Riswan Nopiyar</p>

        <img
          src="https://avatars.githubusercontent.com/u/167524748?v=4"
          alt="Foto Profil 2"
          className="w-4 h-4 rounded-full"
        />
        <p className="text-sm">Kingnish</p>

        <p className="text-sm ml-8">&</p>

        <img
          src="https://avatars.githubusercontent.com/u/100950301?s=200&v=4"
          alt="Foto Profil 3"
          className="w-4 h-4 rounded-full"
        />
        <p className="text-sm">Stability AI</p>
      </div>

      {/* Display dynamic year */}
      <div className="absolute bottom-0 right-0 p-2 text-xs text-gray-400">
        <p>
          &copy; <span id="year"></span> All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;