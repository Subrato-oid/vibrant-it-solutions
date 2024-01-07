import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProp = {
    children: React.ReactNode
}
const TemplateWrapper = ({ children }: LayoutProp) => {
  return (
    <div className="main">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;