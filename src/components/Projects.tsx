import React, { useRef } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      const newScrollPosition = container.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'Responsive personal portfolio using ReactJS and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Node.js', 'Tailwind', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Quiz dashboard',
      description: 'Interactive quiz dashboard built with Django, PostgreSQL, Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      tech: ['Django', 'Tailwind', 'REST-API', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Activity Recognition System using ANN Machine Learning Model',
      description: 'Machine learning model for activity recognition in real-time.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'Jupyter', 'Tensorflow', 'Scikit-learn'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-600">
            Showcase of my recent work and contributions
          </p>
        </div>

        <div className="mt-20 relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-200 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-200 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-center"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <Github className="h-5 w-5 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;