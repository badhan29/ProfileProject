import { BackToTop } from "./BackToTop";
import Content from "../components/Content";
import Touch from "../components/GetInTouch";
import End from "../components/End";
import Header from "./Header";
import Home from "../Pages/Home";
import StandoutPage from "../components/StandoutPage";
import Project from "../components/Project";
import About from "../components/About";

export default function FullPageLayout() {
  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar scroll-smooth">
        <div id="Home" className="sm:h-full snap-start flex flex-col">
          <Header />
          <Home />
        </div>
        <div className=" snap-start bg-relative  ">
          <Content />
        </div>
        <div id="Standout" className=" snap-start bg-relative">
          <StandoutPage />
          <Touch />
        </div>
        <div id="Connect" className="snap-start bg-relative ">
          <Project />
        </div>
        <div id="About" className="snap-start bg-relative ">
          <About />
        </div>
        <div id="Contact" className="snap-end flex flex-col">
          <End />
        </div>
      </div>
      <BackToTop />
    </>
  );
}
