import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const credits = [
  {
    label: "Design + Development",
    value: "Gaurav Badhan",
  },
  {
    label: "Portfolio Direction",
    value: "Memento",
  },
  {
    label: "Frontend Stack",
    value: "React + Tailwind CSS",
  },
  {
    label: "Deployment",
    value: "Vite Build Pipeline",
  },
];

export default function Ccpage() {
  return (
    <MainLayout>
      <Helmet>
        <title>Credits | Memento</title>
        <meta name="description" content="Credits and acknowledgements for the portfolio." />
      </Helmet>

      <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 lg:px-8 md:pb-20">
        <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#dce4d4] opacity-70 blur-xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-red-500 opacity-10 blur-2xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="inline-flex rounded-full bg-[#dce4d4] px-4 py-2 text-sm font-semibold text-gray-800">
            Content & Build Credits
          </p>
          <h1 className="mt-5 font-serif text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Credits
          </h1>
          <p className="mt-4 max-w-2xl text-gray-700 sm:text-lg">
            The portfolio is crafted to highlight practical full-stack work with a clean, engaging,
            and responsive experience.
          </p>
        </div>
      </section>

      <section className="bg-[#dce4d4] px-4 py-14 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
          {credits.map((item) => (
            <article key={item.label} className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                {item.label}
              </p>
              <p className="mt-2 font-serif text-2xl font-bold text-gray-900">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-gray-200 bg-white p-6 md:p-10">
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">Demo Reel</h2>
          <p className="mt-4 max-w-2xl text-gray-700">
            Explore selected visuals and interaction experiments that informed this site style.
          </p>

          <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl bg-gray-100">
            <iframe
              title="Memento demo reel"
              src="https://rarevogel.netlify.app/2/"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-full bg-red-500 px-6 py-3 font-bold text-black transition duration-300 hover:bg-gray-900 hover:text-white"
            >
              View Project Details
            </Link>
            <Link
              to="/"
              className="rounded-full border-2 border-gray-900 px-6 py-3 font-semibold transition duration-300 hover:bg-gray-900 hover:text-white"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
