import React, {Component} from 'react';
import CatalogItem from "./catalogItem.js";

class CatalogList extends Component {
    constructor(props) {
        super(props);
        // this.getListBouquets = this.getListBouquets.bind(this);
    }
    componentDidMount() {
        this.getListBouquets()
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
                {/* <button onClick={this.getListBouquets}>Test request</button> */}
            </div>
        )
    }
    getListBouquets = async () => {
        let response = await fetch(`http://localhost/list.php`);
        let content = await response.json();
        console.log(content);
    }
};

export default CatalogList;