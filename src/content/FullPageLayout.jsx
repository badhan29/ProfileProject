import { BackToTop } from "./BackToTop";
import { useLocation } from "react-router-dom";

import { lazy, Suspense, useEffect } from "react";

import Header from "./Header";

const Home = lazy(() => import("../Pages/Home"));
const Content = lazy(() => import("../components/Content"));
const StandoutPage = lazy(() => import("../components/StandoutPage"));
const Touch = lazy(() => import("../components/GetInTouch"));
const Project = lazy(() => import("../components/Project"));
const About = lazy(() => import("../components/About"));
const End = lazy(() => import("../components/End"));

export default function FullPageLayout() {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location?.state?.scrollTo;
    if (scrollToId) {
      setTimeout(() => {
        const target = document.getElementById(scrollToId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth"});

          // Clear the state so it doesn't keep scrolling on back/forward
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        }
      }, 100); // Delay for lazy components to load
    }
  }, [location]);

  useEffect(() => {
    const removeHash = () => {
      history.replaceState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    };
    window.addEventListener("hashchange", removeHash);
    return () => window.removeEventListener("hashchange", removeHash);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <>
        <div className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory hide-scrollbar scroll-smooth">
          <div id="Home" className="sm:h-full md:snap-start flex flex-col">
            <Header />
            <Home />
          </div>
          <div className="md:snap-start bg-relative  ">
            <Content />
          </div>
          <div id="Standout" className="md:snap-start bg-relative">
            <StandoutPage />
          </div>
          <div id="Standout" className="md:snap-start bg-relative">
            <Touch />
          </div>
          <div id="Connect" className="md:snap-start bg-relative ">
            <Project />
          </div>
          <div
            id="About"
            className="sticky top-0 z-0 md:snap-start bg-relative "
          >
            <About />
          </div>
          <div id="Contact" className="md:snap-start flex flex-col">
            <End />
          </div>
        </div>
        <BackToTop />
      </>
    </Suspense>
  );
}
