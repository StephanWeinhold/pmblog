import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import TagListing from "../components/TagListing/TagListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Themen extends React.Component {
  render() {
    const tagEdges = this.props.data.allMarkdownRemark.group;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <TagListing tagEdges={tagEdges} />
        </div>
      </Layout>
    );
  }
}

export default Themen;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ThemenQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
