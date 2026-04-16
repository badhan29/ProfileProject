import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import runGif from "../assets/run.gif";
import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;

    const timer = setTimeout(() => {
      const target = document.getElementById(targetId);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      navigate(location.pathname, { replace: true, state: {} });
    }, 120);

    return () => clearTimeout(timer);
  }, [location.pathname, location.state, navigate]);

  return (
    <MainLayout>
      <Helmet>
        <title>Home | Memento</title>
        <meta
          name="description"
          content="Portfolio home page showcasing full-stack projects, process, and contact details."
        />
      </Helmet>

      <section className="relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-4 py-6 sm:min-h-[calc(100vh-5rem)] sm:px-6 sm:py-10 lg:px-8">
        <div className="pointer-events-none absolute -left-24 top-12 hidden h-72 w-72 rounded-full bg-[#dce4d4] opacity-80 blur-xl md:block" />
        <div className="pointer-events-none absolute right-0 top-28 hidden h-64 w-64 rounded-full bg-red-500 opacity-10 blur-2xl md:block" />

        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="relative z-10">
            <p className="inline-flex rounded-full bg-[#dce4d4] px-4 py-2 text-sm font-semibold tracking-wide text-gray-800">
              Full-Stack Developer Portfolio
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-gray-900 sm:mt-5 sm:text-5xl md:text-6xl">
              Crafting Elegant,
              <span className="text-red-600"> Scalable </span>
              Web Products
            </h1>
            <p className="mt-5 max-w-xl font-mono text-base leading-relaxed text-gray-700 sm:mt-6 sm:text-lg">
              I am Gaurav Badhan, a full-stack developer focused on turning ideas into polished,
              responsive, and high-impact web applications.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
              <Link
                to="/projects"
                className="rounded-full bg-red-500 px-6 py-3 text-center font-bold text-black transition duration-300 hover:bg-transparent hover:border-2"
              >
                See Projects
              </Link>
              <button
                onClick={() => navigate("/contact")}
                className="rounded-full  bg-gray-900 px-6 py-3 text-center font-semibold transition hover:border-2 duration-300 hover:bg-transparent hover:text-black  text-white"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[320px] p-4 sm:max-w-md sm:p-5">
            <img
              src={runGif}
              alt="Developer illustration"
              className="h-64 w-full rounded-2xl object-cover sm:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#dce4d4] px-4 py-14 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Featured Work
          </h2>
          <p className="mt-3 max-w-2xl font-mono text-gray-700">
            A selection of projects with clean design, reliable architecture, and thoughtful user
            experience.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <Link
            to="/projects"
            className="mt-8 inline-flex rounded-full bg-gray-900 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-red-500 hover:text-black"
          >
            Browse All Projects
          </Link>
        </div>
      </section>

      <section id="about" className="px-4 py-14 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:col-span-2">
            <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
            <p className="mt-4 text-gray-700">
              I build complete digital products from planning and interface design to backend
              implementation and deployment. My approach combines clean visuals with practical
              engineering so products stay delightful and dependable.
            </p>
            <p className="mt-3 text-gray-700">
              I care deeply about responsiveness, maintainable structure, and clear user journeys.
              Every build is tailored to goals, not templates.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h3 className="font-serif text-2xl font-bold text-gray-900">Core Focus</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>Responsive frontends</li>
              <li>Scalable backend APIs</li>
              <li>Product-first UX decisions</li>
              <li>Deployment-ready code quality</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 md:pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gray-900 p-8 text-white md:p-10">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            Need A Dedicated Contact Space?
          </h2>
          <p className="mt-4 max-w-2xl text-gray-200">
            I created a separate Contact page so inquiries are clearly separated from About details.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-red-500 px-6 py-3 font-bold text-black transition duration-300 hover:bg-white"
            >
              Open Contact Page
            </Link>
            <Link
              to="/projects"
              className="rounded-full border border-white/50 px-6 py-3 font-semibold transition duration-300 hover:bg-white hover:text-gray-900"
            >
              Review Projects
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
