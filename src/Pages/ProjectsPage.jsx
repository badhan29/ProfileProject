import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ProjectCard from "../components/projects/ProjectCard";
import MainLayout from "../layouts/MainLayout";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <MainLayout>
      <Helmet>
        <title>Projects | Memento</title>
        <meta
          name="description"
          content="Complete portfolio of project case studies with detailed implementation insights."
        />
      </Helmet>

      <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 lg:px-8 md:pb-20">
        <div className="pointer-events-none absolute -right-10 top-8 h-64 w-64 rounded-full bg-[#dce4d4] opacity-70 blur-2xl" />
        <div className="mx-auto max-w-6xl">
          <p className="inline-flex rounded-full bg-[#dce4d4] px-4 py-2 text-sm font-semibold text-gray-800">
            Selected Case Studies
          </p>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Detailed Project Archive
          </h1>
          <p className="mt-4 max-w-3xl font-mono text-gray-700 sm:text-lg">
            Every card opens a full single-project page with challenge, solution, outcome, and
            technical stack.
          </p>
        </div>
      </section>

      <section className="bg-[#dce4d4] px-4 py-14 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-white p-6 md:p-10">
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Need A Similar Build?
          </h2>
          <p className="mt-4 max-w-2xl text-gray-700">
            I can help you design and develop a project with the same focus on clean UX,
            responsiveness, and maintainable code.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-red-500 px-6 py-3 font-bold text-black transition duration-300 hover:bg-gray-900 hover:text-white"
            >
              Start Discussion
            </Link>
            <Link
              to="/cc"
              className="rounded-full border-2 border-gray-900 px-6 py-3 font-semibold transition duration-300 hover:bg-gray-900 hover:text-white"
            >
              View Credits
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
