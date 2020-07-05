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
        const {handleClickNewBouquet} = this.props;
        const bouquetsList = this.state.bouquetsListState;
        return (
            <div className={`${handleClickNewBouquet && "catalog__content_unactive"}`}>
                <h2 className="admin__subtitle">Catalog of the bouquets</h2>
                <ul className="admin__window catalog__window">
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
    }
};

export default CatalogList;