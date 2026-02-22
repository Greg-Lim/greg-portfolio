export type ExperienceProps = {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  skills: string[];
  link?: string;
  images?: string[];
};

export function Experience(exp: ExperienceProps) {
  return (
    <div className="border-l-4 border-blue-500 pl-3 sm:pl-6 pb-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <span>
            <h2 className="text-2xl font-bold">{exp.title}</h2>
            {exp.link && (
              <a
                href={exp.link}
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                {exp.link}
              </a>
            )}
          </span>
          <p className="text-blue-600 dark:text-blue-400 font-semibold">
            {exp.subtitle}
          </p>
        </div>
        <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap ml-4">
          {exp.period}
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Image */}
        {exp.images && exp.images.length > 0 && (
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img
              src={exp.images[0]}
              alt={exp.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
