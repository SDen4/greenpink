import React, {Component} from 'react';
import CatalogItem from "./catalogItem.js";

class CatalogList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {handleClickNewBouquet} = this.props;
        return (
            <div className={`${handleClickNewBouquet && "catalog__content_unactive"}`}>
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