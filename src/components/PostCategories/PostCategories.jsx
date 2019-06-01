import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostCategories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <span className="post-category-container">
        {categories &&
          categories.map(category => (
            <Link
              key={category}
              className="tag link mr2 pv1 ph2 underline-hover bg-green white"
              to={`/kategorien/${_.kebabCase(category)}`}
            >
              {tag}
            </Link>
          ))}
      </span>
    );
  }
}

export default PostCategories;
