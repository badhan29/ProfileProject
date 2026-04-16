import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <Helmet>
        <title>Contact | Memento</title>
        <meta
          name="description"
          content="Dedicated contact page for project discussions and collaborations."
        />
      </Helmet>

      <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 lg:px-8 md:pb-20">
        <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#dce4d4] opacity-70 blur-xl" />
        <div className="pointer-events-none absolute right-0 top-6 h-72 w-72 rounded-full bg-red-500 opacity-10 blur-2xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="inline-flex rounded-full bg-[#dce4d4] px-4 py-2 text-sm font-semibold text-gray-800">
            Let&apos;s Connect
          </p>
          <h1 className="mt-5 font-serif text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-gray-700 sm:text-lg">
            Share your idea, timeline, and goals. I can help you plan, design,
            and build a clean and reliable web product.
          </p>
        </div>
      </section>

      <section className="bg-[#dce4d4] px-4 py-14 sm:px-6 lg:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
            <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Start A Project
            </h2>
            <p className="mt-4 text-gray-700">
              The fastest way to reach me is by email. Include your project
              type, features, and expected deadline.
            </p>
            <a
              href="mailto:gaurav@example.com"
              className="mt-7 inline-flex rounded-full bg-red-500 px-6 py-3 font-bold text-black transition duration-300 hover:bg-gray-900 hover:text-white"
            >
              Send Email
            </a>
          </article>

          <article className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-900">
              Contact Details
            </h3>
            <div className="mt-5 space-y-4 text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Email:</span>{" "}
                gaurav@example.com
              </p>
              <p>
                <span className="font-semibold text-gray-900">Location:</span>{" "}
                India
              </p>
              <p>
                <span className="font-semibold text-gray-900">Response:</span>{" "}
                Usually within 24 hours
              </p>
            </div>
          </article>
        </div>
      </section>
    </MainLayout>
  );
}
