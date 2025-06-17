import { useState, useEffect } from "react";
import { FileText, Download, ExternalLink, X } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Nutrition Garden Initiative",
    pdf: "/Nutrition-Garden-Initiative.pdf",
    description: "Sustainable agricultural practices for community nutrition",
    category: "Community Development",
    icon: "🌱"
  },
  {
    id: 2,
    title: "Sensitization Banner - LIC HFL Sangam Project",
    pdf: "/Senstization-banner-LICHFL-SANGAM-2.pdf",
    description: "Awareness campaign for community development",
    category: "Awareness Campaign",
    icon: "📢"
  },
  {
    id: 3,
    title: "Solar Powered Drinking Water",
    pdf: "/Solar-Powered-Drinking-Water-Facility.pdf",
    description: "Innovative water solutions using solar power",
    category: "Sustainable Tech",
    icon: "💧"
  },
  {
    id: 4,
    title: "Solar Powered Irrigation System",
    pdf: "/Solar-Powered-Irrigation-System.pdf",
    description: "Sustainable farming through renewable energy",
    category: "Agriculture",
    icon: "☀️"
  }
];

const CaseStudies = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial mobile state
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const openPdfViewer = (pdfUrl: string) => {
    if (isMobile) {
      // Open in new tab on mobile
      window.open(pdfUrl, '_blank');
      return;
    }
    // Show modal on desktop
    setSelectedPdf(pdfUrl);
    setIsViewerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePdfViewer = () => {
    setIsViewerOpen(false);
    setSelectedPdf(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block mb-4">
            Case Studies
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my detailed project case studies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-2xl">
                      {study.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      {study.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">
                      {study.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {study.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => openPdfViewer(study.pdf)}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group-hover:underline"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    {isMobile ? 'View PDF' : 'View in Viewer'}
                  </button>
                  <a
                    href={study.pdf}
                    download
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center px-3 py-1 rounded hover:bg-gray-200"
                    onClick={e => e.stopPropagation()}
                  >
                    <Download className="mr-1 h-4 w-4" />
                    Download
                  </a>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal - Desktop Only */}
      {!isMobile && isViewerOpen && selectedPdf && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closePdfViewer}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              closePdfViewer();
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 z-10"
            aria-label="Close PDF viewer"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div 
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-lg overflow-hidden flex flex-col shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="h-14 px-6 bg-gray-50 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
              <h3 className="text-sm font-medium text-gray-900 truncate pr-4">
                {caseStudies.find(cs => cs.pdf === selectedPdf)?.title || 'Document'}
              </h3>
              <div className="flex items-center space-x-3">
                <a
                  href={selectedPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center px-3 py-1.5 rounded-md hover:bg-blue-50 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalLink className="mr-1.5 h-4 w-4" />
                  Open
                </a>
                <a
                  href={selectedPdf}
                  download
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center px-3 py-1.5 rounded-md hover:bg-blue-50 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <Download className="mr-1.5 h-4 w-4" />
                  Download
                </a>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="w-full h-full">
                <iframe 
                  src={`${selectedPdf}#toolbar=0&navpanes=0&view=FitH`} 
                  className="w-full h-full border-0"
                  title="PDF Viewer"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;
