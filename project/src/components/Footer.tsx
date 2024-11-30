import React from 'react';
import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <div className="flex items-center justify-center md:justify-start">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <p className="ml-2 text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} Better Life Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}