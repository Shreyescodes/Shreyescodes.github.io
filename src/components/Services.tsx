import React from 'react';
import { Code, Globe, Database, Cloud, Smartphone, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications using modern frameworks and technologies.',
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Backend Development',
      description: 'Designing and implementing scalable server-side solutions and APIs.',
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms like AWS and Azure.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'API Integration',
      description: 'Seamlessly connecting different services and systems through API development.',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications using React Native.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security Implementation',
      description: 'Implementing robust security measures and best practices.',
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Services Offered</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive software solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;