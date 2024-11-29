import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Software Engineer
              <span className="block text-indigo-600">Building Digital Solutions</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Transforming ideas into elegant, scalable, and user-centric applications. 
              Specialized in Full-Stack Development.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <div className="flex space-x-4 items-center">
                <a
                  href="https://github.com/Shreyescodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/shreyasb1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:shreyastc19.@gmail.com"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Hero;