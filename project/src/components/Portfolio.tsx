import React from 'react';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80",
    title: "Modern Living Room",
    description: "Laminate flooring installation"
  },
  {
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80",
    title: "Luxury Kitchen",
    description: "Vinyl flooring installation"
  },
  {
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80",
    title: "Classic Bedroom",
    description: "Hardwood flooring installation"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our latest installations and get inspired for your next project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-200">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}