import React, {Component} from 'react';
import CatalogItem from "./catalogItem.js";

class CatalogList extends Component {
    state = {
        bouquetsListState: []
    }
    componentDidMount() {
        this.getListBouquets();
    }
    render() {
        const bouquetsList = this.state.bouquetsListState;
        return (
            <div>
                <h2 className="catalogList__subtitle">Catalog of the bouquets</h2>
                <ul className="catalogList__window">
                    {bouquetsList.map((bouquet, index) => (
                        <CatalogItem key={index} bouquet={bouquet}/>
                    ))}
                </ul>
            </div>
        )
    }
    getListBouquets = async () => {
        let response = await fetch(`http://localhost/list.php`);
        let content = await response.json();
        this.setState({
            bouquetsListState: content
        });
        console.log(this.state.bouquetsListState);
    }
};

export default CatalogList;