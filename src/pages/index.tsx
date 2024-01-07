import * as React from "react";
import { PageProps, graphql } from "gatsby";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Clients from "../components/Clients";
import About from "../components/About";
import Success from "../components/Success";
import Service from "../components/Services";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";
import Solution from "../components/Solution";
import "../styles/global.css"

export type IndexPageType = Pick<Queries.IndexPageQuery, "markdownRemark">;

// Step 2: Define your component
const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return <IndexPageTemplate markdownRemark={data.markdownRemark} />;
};

export const IndexPageTemplate = ({ markdownRemark }: IndexPageType) => {
  const pageObj = markdownRemark?.frontmatter;
  return (
    <div className="main">
      <Layout>
        {/* title={pageObj?.title} image={pageObj?.image} */}
        <Hero />
        <Clients />
        <About />
        <Success />
        <Service />
        <Process />
        <Testimonial />
        <Success />
        <Solution />
      </Layout>
    </div>
  );
};

// You'll learn about this in the next task, just copy it for now
export { Head } from "../components/Head"

// Step 3: Export your component
export default IndexPage;

export const query = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      id
      frontmatter {
        title
        image
      }
    }
  }
`;
