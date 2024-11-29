import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    
    {
      degree: "Bachelor's in Electronics and Communication Engineering",
      school: 'RNSIT',
      description: 'Gained expertise in problem-solving, logical reasoning, and technical systems—foundational skills that complement my software engineering journey.',
      achievements: [
        
        'Best Project from Social Impact Category',
        'Best paper presentation in the National Level Technical Conference',
        'Recieved Sponsership for final year engineering project from Karnataka State Technical council ',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Introduction to Machine Learning',
      issuer: 'NPTEL',
      year: '2020',
    },
    {
      name: 'IBM Data Science Professional Certificate',
      issuer: 'Coursera',
      year: '2021',
    },
    {
      name: 'Neural Networks and Deep Learning',
      issuer: 'Coursera',
      year: '2020',
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Education & Certifications</h2>
          <p className="mt-4 text-xl text-gray-600">
            Academic background and professional certifications
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Education Section */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-indigo-600 font-medium">{edu.school}</p>
                    <p className="text-gray-600 mt-2">{edu.description}</p>
                    
                    <ul className="mt-4 space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <Award className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <div className="flex items-center mb-8">
                <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
                        <p className="text-gray-600">{cert.issuer}</p>
                      </div>
                      <span className="text-indigo-600 font-medium">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;