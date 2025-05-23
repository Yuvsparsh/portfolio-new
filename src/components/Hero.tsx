import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "UI/UX Designer",
    "Product Thinker",
    "Creative Problem Solver",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-16 pb-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-coral-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Sparsh
                </span>
              </h1>

              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 min-h-[3rem] sm:min-h-[3.5rem] lg:min-h-[4rem] flex items-center justify-center lg:justify-start">
                <span className="mr-2">A</span>
                <span
                  key={currentTitle}
                  className="text-blue-500 font-semibold transition-all duration-500 ease-in-out opacity-100 animate-pulse"
                >
                  {titles[currentTitle]}
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              I craft digital experiences that are not just beautiful, but
              meaningful. Turning complex problems into simple, elegant
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToWork}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </button>
              <a
                href="/resume.pdf"
                download
                className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-200 text-center hover:bg-blue-50"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative order-1 lg:order-2">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-lg opacity-10"></div>
              <img
                src="/profile.jpg"
                alt="Sparsh Yadav"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300"
              />
              {/* Decorative rings */}
              <div
                className="absolute inset-0 rounded-full border-2 border-blue-200 opacity-20 animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>
              <div
                className="absolute inset-4 rounded-full border border-purple-200 opacity-30 animate-spin"
                style={{
                  animationDuration: "15s",
                  animationDirection: "reverse",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToWork}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-blue-500 transition-colors duration-200"
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
