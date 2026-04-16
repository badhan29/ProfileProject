import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { getProjectById, projects } from "../data/projects";

function DetailBlock({ title, text }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5">
      <h3 className="font-serif text-2xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-700">{text}</p>
    </article>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectById(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = projects.filter((item) => item.id !== project.id).slice(0, 2);

  return (
    <MainLayout>
      <Helmet>
        <title>{project.title} | Project Details</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <section className="px-4 pb-14 pt-10 sm:px-6 lg:px-8 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/projects"
            className="inline-flex rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-500 hover:text-red-700"
          >
            Back To Projects
          </Link>

          <div className="mt-6 grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="inline-flex rounded-full bg-[#dce4d4] px-3 py-1 text-xs font-semibold text-gray-800">
                {project.category}
              </p>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-700">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-5">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full rounded-2xl object-cover sm:h-72"
              />
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-[#dce4d4] p-3">
                  <p className="text-gray-600">Timeline</p>
                  <p className="font-bold text-gray-900">{project.duration}</p>
                </div>
                <div className="rounded-xl bg-red-500/10 p-3">
                  <p className="text-gray-600">Year</p>
                  <p className="font-bold text-gray-900">{project.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dce4d4] px-4 py-14 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <DetailBlock title="Challenge" text={project.challenge} />
          <DetailBlock title="Solution" text={project.solution} />
          <DetailBlock title="Outcome" text={project.outcome} />
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore More Projects
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {relatedProjects.map((item) => (
              <Link
                key={item.id}
                to={`/projects/${item.id}`}
                className="rounded-2xl border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-red-700">
                  {item.category}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
