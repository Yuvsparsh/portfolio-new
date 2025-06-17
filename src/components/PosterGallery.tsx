import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const posters = [
  {
    id: 1,
    title: "Design House",
    image: "/poster-1.jpg",
    description: "Poster for Design House celebrating World Social Media Day, showcasing creative digital connectivity"
  },
  {
    id: 2,
    title: "Gaon Originals",
    image: "/poster-2.jpg",
    description: "Uttarakhand Tea poster - Pure flavors from the heart of the Himalayas, celebrating local heritage"
  },
  {
    id: 3,
    title: "Nanhe Kadam",
    image: "/poster-3.jpg",
    description: "Gaon's Nanhe Kadam initiative - Nurturing young minds in rural pathshalas"
  },
];

const PosterGallery = () => {
  const [selectedPoster, setSelectedPoster] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedPoster(posters[index].id);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPoster(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % posters.length;
    } else {
      newIndex = (currentIndex - 1 + posters.length) % posters.length;
    }
    setCurrentIndex(newIndex);
    setSelectedPoster(posters[newIndex].id);
  };

  // Function to apply gradient text styles based on poster
  const getGradientClass = (id: number) => {
    switch(id) {
      case 1: return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 2: return 'bg-gradient-to-r from-green-600 to-emerald-400';
      case 3: return 'bg-gradient-to-r from-amber-500 to-yellow-300';
      default: return 'bg-gradient-to-r from-blue-500 to-cyan-400';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block mb-4">
            Creative Showcase
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of impactful designs that tell compelling stories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posters.map((poster, index) => (
            <div 
              key={poster.id}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={poster.image}
                  alt={poster.description}
                  className="w-full h-full object-contain p-2 bg-white"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className={`text-lg font-semibold ${getGradientClass(poster.id)} bg-clip-text text-transparent`}>
                  {poster.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {poster.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPoster !== null && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div 
              className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={posters[currentIndex].image}
                alt={posters[currentIndex].description}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigate('prev');
              }}
              className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigate('next');
              }}
              className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 text-center" onClick={e => e.stopPropagation()}>
              <span className="text-white/80 text-sm bg-black/40 px-3 py-1 rounded-full">
                {currentIndex + 1} of {posters.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PosterGallery;
