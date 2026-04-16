import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../content/Header";
import SiteFooter from "../components/common/SiteFooter";

export default function MainLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
