import React, {Component} from 'react';
import CatalogItem from "./catalogItem.js";

class CatalogList extends Component {
    render() {
        return (
            <div className="catalog__content">
                <h2 className="admin__subtitle">Catalog of the bouquets</h2>
                <ul className="admin__window catalog__window">
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                    <CatalogItem />
                </ul>
            </div>
        )
    }
};

export default CatalogList;