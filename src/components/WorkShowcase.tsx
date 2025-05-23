import { useState } from "react";
import { ChevronRight, ExternalLink, Calendar, Award } from "lucide-react";

const WorkShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Private Company Ads Page",
      description:
        "Redesigned banking experience with focus on user security and accessibility",
      image: "/portfolio1.png",
      tags: ["Mobile Design", "FinTech", "UX Research"],
      year: "2025",
      impact: "",
      color: "from-purple-500 to-pink-500",
      caseStudyUrl:
        "https://www.figma.com/proto/1vWuwGXwjK4XNWDCdeGEdn/Portfolio?node-id=35-399&t=fOP3dQFhvKAY9bES-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A9167",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "Complete UX overhaul resulting in 40% increase in conversion rates",
      image: "/portfolio2.png",
      tags: ["Web Design", "E-commerce", "A/B Testing"],
      year: "2025",
      impact: "",
      color: "from-blue-500 to-cyan-500",
      caseStudyUrl:
        "https://www.figma.com/proto/1vWuwGXwjK4XNWDCdeGEdn/Portfolio?node-id=1-8425&t=AOgMcq7bGoJwk7VP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A9167",
    },
    {
      id: 3,
      title: "CA Servic Page Ads",
      description:
        "Complex data visualization made simple for medical professionals",
      image: "/portfolio3.png",
      tags: ["Landing Page", "ADS", "FORM"],
      year: "2025",
      impact: "",
      color: "from-emerald-500 to-teal-500",
      caseStudyUrl:
        "https://www.figma.com/proto/1vWuwGXwjK4XNWDCdeGEdn/Portfolio?node-id=35-1598&t=fOP3dQFhvKAY9bES-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=35%3A1598",
    },
    {
      id: 4,
      title: "Local Page Ads Comnpany Registration",
      description:
        "B2B software interface designed for productivity and user engagement",
      image: "/portfolio4.png",
      tags: ["ADS", "Product Design", "Landing Page"],
      year: "2025",
      impact: "",
      color: "from-orange-500 to-red-500",
      caseStudyUrl:
        "https://www.figma.com/proto/1vWuwGXwjK4XNWDCdeGEdn/Portfolio?node-id=35-1160&t=fOP3dQFhvKAY9bES-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A9167",
    },
  ];

  return (
    <section
      id="work"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-600 mb-6 shadow-sm">
            <Award className="w-4 h-4 text-yellow-500" />
            Featured Work
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Design That Delivers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that don't just look beautiful—they
            solve problems, drive results, and create lasting impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredProject === project.id
                          ? "scale-110 brightness-110"
                          : "scale-100"
                      }`}
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500 ${
                        hoveredProject === project.id
                          ? "opacity-70"
                          : "opacity-0"
                      }`}
                    ></div>

                    {/* Floating Year Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                        <Calendar className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-800">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Impact Badge */}
                    {project?.impact && (
                      <div
                        className={`absolute bottom-6 left-6 transform transition-all duration-500 ${
                          hoveredProject === project.id
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                      >
                        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                          <span className="text-sm font-bold text-gray-800">
                            {project.impact}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 ${
                          hoveredProject === project.id
                            ? `bg-gradient-to-r ${project.color} text-white shadow-lg`
                            : "bg-gray-100 text-gray-700"
                        }`}
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    {/* <a
                      href={project.caseStudyUrl}
                      className={`inline-flex items-center font-semibold text-lg transition-all duration-300 hover:no-underline ${
                        hoveredProject === project.id
                          ? "text-purple-600 gap-3"
                          : "text-gray-700 gap-2"
                      }`}
                    >
                      <span>View Full Project</span>
                      <div
                        className={`transition-all duration-300 ${
                          hoveredProject === project.id
                            ? "transform translate-x-1 text-purple-600"
                            : "text-gray-400"
                        }`}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </a> */}
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      className={`transform transition-all duration-300 ${
                        hoveredProject === project.id
                          ? "transform translate-x-1 text-purple-600"
                          : "text-gray-400"
                      }`}
                    >
                      View Full Project &rarr;
                    </a>

                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      className={`transform transition-all duration-300 ${
                        hoveredProject === project.id
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    >
                      <ExternalLink className="w-5 h-5 text-purple-600 hover:text-purple-700" />
                    </a>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div
                  className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${
                    project.color
                  } rounded-full blur-xl transition-all duration-500 ${
                    hoveredProject === project.id
                      ? "opacity-20 scale-150"
                      : "opacity-0 scale-75"
                  }`}
                ></div>
                <div
                  className={`absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr ${
                    project.color
                  } rounded-full blur-lg transition-all duration-700 ${
                    hoveredProject === project.id
                      ? "opacity-15 scale-125"
                      : "opacity-0 scale-50"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <a
            href="/portfolio"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:no-underline"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default WorkShowcase;
