import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="category-container">
          <Helmet title={`Alle Artikel in der Kategorie "${category}" | ${config.siteTitle}`} />
          <h1>
            Alle Artikel in der Kategorie 
            &quot;
            {category}
            &quot;
          </h1>
          <p>
            Eine Übersicht zu allen Kategorien
            {" "}
            <Link 
              to={`/kategorien`}
              className="link underline-hover gold"
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
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
