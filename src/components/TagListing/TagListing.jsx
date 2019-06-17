import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { replaceUmlauts } from "../../helpers.js";

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
        <p>
          Hier findet Ihr eine Liste aller Projektmanagement-Themen, über die ich 
          hier Artikel verfasst habe. Zu den Kategorien 
          {" "}
          <Link 
            to="/kategorien"
            className="link underline-hover gold"
          >
            geht es übrigens hier
          </Link>
          .
        </p>
        <ul className="list pl0">
          {
          tagList.map(tag => (
            <li key={tag.fieldValue} className="mb3">
              <Link 
                to={`/themen/${_.kebabCase(replaceUmlauts(tag.fieldValue))}`}
                className="tag link mr2 pv1 ph2 underline-hover bg-green white"
              >
                {tag.fieldValue} 
                {' '}
                (
                {tag.totalCount}
                )
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TagListing;
