import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56"
          loading="lazy"
        />
      </div>

      <div className="mt-5">
        <p className="inline-flex rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-700">
          {project.category}
        </p>
        <h3 className="mt-3 font-serif text-2xl font-bold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-gray-700">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="mt-6 inline-flex rounded-full bg-red-500 px-5 py-2.5 font-semibold text-black transition duration-300 hover:bg-gray-900 hover:text-white"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
