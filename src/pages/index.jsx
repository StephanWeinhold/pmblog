import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          
          <section className="w-100">
            <div className="pv4 ph4 lh-copy bg-yellow">
              <h3 className="dark-pink">Keine Sorge!</h3>
              <p className="black">
                Es schaut zwar alles neu aus, aber im Grunde hat sich nichts geändert. 
                Das heißt: neues Layout (endlich!), neue Domain (projektmanagementblog.de), 
                die selben (hoffentlich guten, auf jeden Fall mit viel Liebe geschriebenen) 
                Artikel über Projektmanagement. Alle zwei Wochen. Nur für Euch!
              </p>
              <p className="black">
                Ich freue mich, wie immer, über Euer Feedback via 
                {" "}
                <a href={`mailto:${config.userEmail}`} className="link dark-pink">E-Mail</a>
                , 
                {" "}
                <a href="https://www.linkedin.com/in/stephanweinhold" className="link dark-pink">LinkedIn</a>
                , oder
                {" "} 
                <a href="https://www.xing.com/profile/Stephan_Weinhold" className="link dark-pink">XING</a>
                .
              </p>
            </div>
          </section>
          
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
            date
          }
          excerpt(pruneLength: 320)
          timeToRead
          frontmatter {
            title
            category
            tags
            date
            description
          }
        }
      }
    }
  }
`;
