import React from 'react';
import Image from 'next/image';

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  category: string;
}

const ToolCard = ({ title, description, icon, category }: ToolCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <span className="text-sm text-gray-500">{category}</span>
    </div>
  );
};

export default ToolCard; 