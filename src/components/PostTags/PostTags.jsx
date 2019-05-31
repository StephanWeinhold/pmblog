import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <span className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              className="tag link mr2 pv1 ph2 underline-hover bg-green white"
              to={`/themen/${_.kebabCase(tag)}`}
            >
              {tag}
            </Link>
          ))}
      </span>
    );
  }
}

export default PostTags;
