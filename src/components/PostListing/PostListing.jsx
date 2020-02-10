import React from "react";
import { Link } from "gatsby";
import moment from "moment";
import PostTags from "../PostTags/PostTags";
import PostCategory from "../PostCategory/PostCategory";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    const { postEdges } = this.props;
    postEdges.forEach(postEdge => {
      postList.push({
        id: postEdge.node.id,
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        category: postEdge.node.frontmatter.category,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        description: postEdge.node.frontmatter.description,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {
        postList.map(post => (
          <article key={post.id} className="pt4 lh-copy measure-wide">
            <h1 className="f3 lh-copy mb2 "><Link to={post.path} className="link black-90">{post.title}</Link></h1>
            <nav className="nav-lh">
              <div className="nowrap overflow-x-auto">
                <span className="mr2 black-50"><time dateTime={post.date}>{moment(post.date).format('YYYY')}</time></span>
                <PostCategory category={post.category} />
                <PostTags tags={post.tags} />
              </div>
            </nav>               
            <p className="mv3">
              {post.description}
            </p>
            <p>
              <Link to={post.path} className="link pv1 ph2 underline-hover bg-dark-blue white">Artikel lesen</Link>
            </p>
          </article>
        ))
        }
      </div>
    );
  }
}

export default PostListing;
