import { BackToTop } from "./BackToTop";
import { useEffect } from "react";
import Content from "../components/Content";
import Touch from "../components/GetInTouch";
import End from "../components/End";
import Header from "./Header";
import Home from "../Pages/Home";
import StandoutPage from "../components/StandoutPage";
import Project from "../components/Project";
import About from "../components/About";

export default function FullPageLayout() {
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
          <Touch />
        </div>
        <div id="Connect" className="md:snap-start bg-relative ">
          <Project />
        </div>
        <div id="About" className="sticky top-0 z-0 md:snap-start bg-relative ">
          <About />
        </div>
        <div id="Contact" className="md:snap-end flex flex-col">
          <End />
        </div>
      </div>
      <BackToTop />
    </>
  );
}
