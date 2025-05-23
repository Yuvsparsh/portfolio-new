const About = () => {
  const skills = [
    { name: "Figma", level: 95 },
    { name: "User Research", level: 90 },
    { name: "Prototyping", level: 88 },
    { name: "Adobe XD", level: 85 },
    { name: "Design Systems", level: 92 },
    { name: "Usability Testing", level: 87 },
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "25+", label: "Happy Clients" },
    { number: "15+", label: "Awards Won" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-coral-500 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I’m a Visual and UI Designer with a Bachelor’s degree in Fine
                Arts and a strong foundation in creating intuitive,
                aesthetically pleasing digital experiences. With a blend of
                artistic vision and functional design skills, I specialize in
                building user interfaces that not only look great but also
                perform seamlessly.
              </p>

              <p>
                Over the past few years, I’ve interned with multiple
                design-driven companies, where I delivered high-impact UI/UX
                assets, templates, and illustrations that improved user
                satisfaction and content performance. I work across tools like
                Figma, Adobe Creative Suite, and Blender, bringing concepts to
                life through clean layouts, thoughtful interactions, and
                purposeful storytelling.
              </p>

              <p>
                When I'm not designing, you'll find me exploring local coffee
                shops, diving into design psychology, or crafting animations and
                3D visualizations.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Image */}
          <div className="space-y-8 animate-fade-in-down">
            {/* Professional Photo */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-coral-500 rounded-2xl rotate-6"></div>
                <img
                  src="/profile.jpg"
                  alt="Sparsh Yadav at work"
                  className="w-full h-full object-cover rounded-2xl relative z-10 shadow-xl"
                />
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Skills & Expertise
              </h3>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-coral-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
