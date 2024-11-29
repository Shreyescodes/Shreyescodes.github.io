import React from 'react';
import { Code2, Brain, Rocket, Users } from 'lucide-react';

const About = () => {
  const skillCategories = {
    Frontend: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Tailwind CSS',
    ],
    Backend: [
      'Node.js',
      'Express.js',
      'Python',
      'Django',
      'Java',
      'Spring Boot',
    ],
    Databases: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
    ],
    'DevOps & Tools': [
      'Docker',
      'Git',
      'Jenkins',
      'RESTful APIs',
    ],
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 text-xl text-gray-600">Passionate about creating innovative solutions</p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a software engineer with a passion for building scalable applications 
                and solving complex problems. With years of experience in full-stack 
                development, I specialize in creating efficient, maintainable, and 
                user-friendly solutions.
              </p>
              
              <div className="mt-8 space-y-6">
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium text-center hover:bg-indigo-100 transition-colors duration-200"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Code2 className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Clean Code</h3>
                  <p className="mt-2 text-gray-600">
                    Writing maintainable, efficient, and well-documented code is my priority.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Problem Solving</h3>
                  <p className="mt-2 text-gray-600">
                    Approaching complex challenges with analytical thinking and creative solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Rocket className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Innovation</h3>
                  <p className="mt-2 text-gray-600">
                    Staying current with latest technologies and best practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Collaboration</h3>
                  <p className="mt-2 text-gray-600">
                    Working effectively in teams and communicating complex ideas clearly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;