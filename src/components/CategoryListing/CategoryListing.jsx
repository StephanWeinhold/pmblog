import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

class CategoryListing extends React.Component {
  getCategoryList() {
    const categoryList = [];
    this.props.categoryEdges.forEach(categoryEdge => {
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
        <p>Hier findet Ihr eine Liste aller Projektmanagement-Kategorien, in die meine Artikel gegliedert sind.</p>
        <ul className="list pl0">
          {
          categoryList.map(category => (
            <li key={category.fieldValue} className="mb3">
              <Link 
                to={`/kategorien/${_.kebabCase(category.fieldValue)}`}
                className="category link mr2 pv1 ph2 underline-hover bg-gold white"
              >
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryListing;
