import React from "react";
import { Link } from "gatsby";
import PostTags from "../PostTags/PostTags";
import PostCategory from "../PostCategory/PostCategory";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        id: postEdge.node.id,
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        category: postEdge.node.frontmatter.category,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
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
          <article key={post.id} class="pt4">
            <h1><Link to={post.path} className="link black-90">{post.title}</Link></h1>
            <nav>
              <span class="mr2 black-50"><time datetime={post.date}>{post.date}</time></span>
              <PostCategory category={post.category} />
              <PostTags tags={post.tags} />
            </nav>               
            <p class="mv4">
              {post.excerpt}
            </p>
            <p>
              <Link to={post.path} className="link pv1 ph2 underline-hover bg-dark-blue white">Weiterlesen</Link>
            </p>
          </article>
        ))}
      </div>
    );
  }
}

export default PostListing;
