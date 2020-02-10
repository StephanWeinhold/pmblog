import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { replaceUmlauts } from "../../helpers";

class PostCategory extends Component {
  render() {
    const { category } = this.props;
    
    return (
      <span className="post-category-container">
        <Link
          key={category}
          className="category link mr2 pv1 ph2 underline-hover bg-gold white"
          to={`/kategorien/${_.kebabCase(replaceUmlauts(category))}`}
        >
          {category}
        </Link>
      </span>
    );
  }
}

export default PostCategory;
