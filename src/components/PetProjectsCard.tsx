import React from "react";

interface PetProjectCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  techTags?: string[];
  children?: React.ReactNode;
}

export const PetProjectCard: React.FC<PetProjectCardProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  techTags = [],
  children,
}) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col md:flex-row m-5">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full md:w-1/3 h-48 md:h-auto object-cover"
        />
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        {subtitle && (
          <p className="text-gray-600 mb-2">{subtitle}</p>
        )}

        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </article>
  );
};