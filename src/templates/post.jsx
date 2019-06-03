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
          <div className="lh-copy">
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className="post-meta">
              <PostCategory category={post.category} />
              <PostTags tags={post.tags} />
            </div>
            <div className="cf ph2-ns">
              <div className="fl w-100 w-50-ns pa2">
                <a className="link db" href={pageContext.prevslug}>
                  <h4 className="mb2 normal silver">Vorheriger Artikel</h4>
                  <span className="b dark-blue">
                    &#8592;{' '}
                    {pageContext.prevtitle}
                  </span>
                </a>
              </div>
              <div className="fl w-100 w-50-ns pa2">
                <a className="link db tr" href={pageContext.nextslug}>
                  <h4 className="mb2 normal tr silver">Nächster Artikel</h4>
                  <span className="b tr dark-blue">
                    {pageContext.nexttitle}
                    {' '}&#8594;
                  </span>
                </a>
              </div>
            </div>
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
        cover
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
