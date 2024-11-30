import React from 'react';

const HeroSection = () => {
  // Handle scroll to 'Services' section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('Services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="Home"
      className="mx-auto mt-36 mb-48 max-w-[900px] px-4 sm:px-8 xl:px-0 relative"
    >
      <div className="text-center">
        {/* Title */}
        <h1 className="text-black dark:text-white text-3xl font-extrabold sm:text-5xl xl:text-heading-1 pb-2">
          Ai Tool
        </h1>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1 pb-2">
          AI Image Generator
        </h1>

        {/* Description Text */}
        <p className="max-w-[500px] mx-auto mb-9 font-medium text-lg md:text-lg text-gray-600 dark:text-gray-400">
          Use SDXL Flash AI to instantly turn text prompts into high-quality
          images for websites, social media, and more. It's perfect for
          fast-paced projects that require quick, unique visuals.
        </p>

        {/* Call to Action Button */}
        <a
          href="https://www.nopiyar.my.id/search/label/Ai"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 inline-flex items-center justify-center py-3 px-7 text-white font-medium rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 shadow-2xl transform scale-105 hover:shadow-lg transition-all duration-300 dark:bg-gradient-to-r dark:from-purple-700 dark:to-purple-900"
        >
          More AI
        </a>
        <button
          onClick={scrollToServices}
          className="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]"
        >
          <div className="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2">
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-gray-700 dark:text-gray-700">
                Get Started
              </span>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;