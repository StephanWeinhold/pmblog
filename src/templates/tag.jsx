import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="tag-container">
          <Helmet title={`Alle Artikel zum Thema "${tag}" | ${config.siteTitle}`} />
          <h1>
            Alle Artikel zum Thema 
            &quot;
            {tag}
            &quot;
          </h1>
          <p>
            Eine Übersicht zu allen Themen
            {" "}
            <Link 
              to={`/themen`}
              className="link underline-hover green"
            >
              findet Ihr hier
            </Link>
            .
          </p>
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            category
            tags
            date
          }
        }
      }
    }
  }
`;
