import React from 'react';
import { Layers, Trees, Hexagon } from 'lucide-react';

const services = [
  {
    icon: <Layers className="h-12 w-12 text-blue-600" />,
    title: 'Laminate Flooring',
    description: 'Durable and stylish laminate options perfect for high-traffic areas and modern homes.',
  },
  {
    icon: <Trees className="h-12 w-12 text-blue-600" />,
    title: 'Hardwood Flooring',
    description: 'Premium hardwood installations that add timeless beauty and value to your space.',
  },
  {
    icon: <Hexagon className="h-12 w-12 text-blue-600" />,
    title: 'Vinyl Flooring',
    description: 'Versatile and water-resistant vinyl solutions ideal for kitchens and bathrooms.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer professional installation services for all your flooring needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}