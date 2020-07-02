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
                <button onClick={this.getListBouquets}>Test request</button>
            </div>
        )
    }
    getListBouquets = async () => {
        let response = await fetch(`http://localhost/`);
        let content = await response.text();
        console.log(response);



        // const url = new URL(`http://localhost/`);
        // const request1 = new XMLHttpRequest();
        // request1.open('GET', url, false);
        // request1.send();
        // console.log(request1);
        // console.log( request1.response );
    }
};

export default CatalogList;