import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import CategoryListing from "../components/CategoryListing/CategoryListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Themen extends React.Component {
  render() {
    const categoryEdges = this.props.data.allMarkdownRemark.group;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={`Themen | ${config.siteTitle}`} />
          <SEO />
          <CategoryListing categoryEdges={categoryEdges} />
        </div>
      </Layout>
    );
  }
}

export default Themen;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query KategorienQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
