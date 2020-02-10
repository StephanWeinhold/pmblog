import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { replaceUmlauts } from "../../helpers";

class CategoryListing extends React.Component {
  getCategoryList() {
    const categoryList = [];
    const { categoryEdges } = this.props;
    categoryEdges.forEach(categoryEdge => {
      categoryList.push({
        fieldValue: categoryEdge.fieldValue,
        totalCount: categoryEdge.totalCount,
      });
    });
    return categoryList;
  }
  
  render() {
    const categoryList = this.getCategoryList();
    return (
      <div>
        <h1>Alle Kategorien</h1>
        <p>
          Hier findet Ihr eine Liste aller Projektmanagement-Kategorien, in die 
          meine Artikel gegliedert sind. Zu den Themen 
          {" "}
          <Link 
            to="/themen"
            className="link underline-hover green"
          >
            geht es übrigens hier
          </Link>
          .
        </p>
        <ul className="list pl0 mt4">
          {
          categoryList.map(category => (
            <li key={category.fieldValue} className="mb3">
              <Link 
                to={`/kategorien/${_.kebabCase(replaceUmlauts(category.fieldValue))}`}
                className="category link mr2 pv1 ph2 underline-hover bg-gold white"
              >
                {category.fieldValue} 
                {" "}
                (
                {category.totalCount}
                )
              </Link>
            </li>
          ))
          }
        </ul>
      </div>
    );
  }
}

export default CategoryListing;
