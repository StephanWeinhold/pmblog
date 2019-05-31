import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

class TagListing extends React.Component {
  getTagList() {
    const tagList = [];
    this.props.tagEdges.forEach(tagEdge => {
      tagList.push({
        fieldValue: tagEdge.fieldValue,
        totalCount: tagEdge.totalCount,
      });
    });
    return tagList;
  }
  render() {
    const tagList = this.getTagList();
    return (
      <div>
        <h1>Alle Themen</h1>
        <p>Hier findet Ihr eine Liste aller Projektmanagement-Themen, über die ich hier Artikel verfasst habe.</p>
        <ul>
        {
        tagList.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/themen/${_.kebabCase(tag.fieldValue)}`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
        </ul>
      </div>
    );
  }
}

export default TagListing;
