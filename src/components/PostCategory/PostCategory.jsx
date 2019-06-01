import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostCategory extends Component {
  render() {
    const { category } = this.props;
    
    if (category) {
      return (
        <span className="post-category-container">
          <Link
            key={category}
            className="category link mr2 pv1 ph2 underline-hover bg-gold white"
            to={`/kategorien/${_.kebabCase(category)}`}
          >
            {category}
          </Link>
        </span>
      );
    }
    else {
      return (<span></span>);
    }
  }
}

export default PostCategory;
