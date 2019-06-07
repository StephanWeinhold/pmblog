import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostTags from "../components/PostTags/PostTags";
import PostCategory from "../components/PostCategory/PostCategory";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <h1>{post.title}</h1>
            <div className="lh-copy measure-wide" dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <PostCategory category={post.category} />
              <PostTags tags={post.tags} />
            </div>
            <div className="cf ph2-ns">
              <div className="fl w-100 w-50-ns pa2">
                <a className="link db" href={pageContext.prevslug}>
                  <h4 className="mb2 normal silver">Vorheriger Artikel</h4>
                  <span className="b dark-blue">
                    &#8592;
                    {' '}
                    {pageContext.prevtitle}
                  </span>
                </a>
              </div>
              <div className="fl w-100 w-50-ns pa2">
                <a className="link db tr" href={pageContext.nextslug}>
                  <h4 className="mb2 normal tr silver">Nächster Artikel</h4>
                  <span className="b tr dark-blue">
                    {pageContext.nexttitle}
                    {' '}
                    &#8594;
                  </span>
                </a>
              </div>
            </div>
            
            <hr className="mt4 mb2" />
            <p className="lh-copy">
              {config.siteDescription}
              {" "}
              <a href="https://stephanweinhold.com" target="_blank" className="link dark-blue">
                Stephan Weinhold
              </a> 
              {" "}
              ist übrigens auch auf 
              {" "}
              <a href="https://at.linkedin.com/in/stephanweinhold" target="_blank" rel="noopener noreferrer" className="link dark-blue">
                LinkedIn
              </a>
              {" "}
              zu finden.
              {" "}
              <a href="https://twitter.com/StephanWeinhold" target="_blank" rel="noopener noreferrer" className="link dark-blue">
                Du solltest ihm außerdem auf Twitter folgen
              </a>
              .
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover {
          id
        }
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
