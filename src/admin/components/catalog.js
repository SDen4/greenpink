import React, {Component} from 'react';
import CatalogList from "./catalogList";
import CatalogNewBouquet from "./catalogNewBouquet";


class Catalog extends Component {
    state = {
        newBouquet: false
    }
    render() {
        const newBouquet = this.state.newBouquet && <CatalogNewBouquet handleClear={this.handleClickNewBouquet} />;
        const catalogList = !this.state.newBouquet && <CatalogList />;
        return (
            <section className="admin catalog">
                {newBouquet}
                {catalogList}
                <div className="catalog__footer">
                    <div className={`${this.state.newBouquet ? "catalog__footer_delete_unactive" : "catalog__footer_delete"}`}>
                        <input className="catalog__footer_all-items" type="checkbox"></input>
                        <button className="admin__button admin__button_delete">Delete</button>
                    </div>
                    <button
                        onClick={this.handleClickNewBouquet}
                        className={`${this.state.newBouquet && "admin__button_create_active"} ${"admin__button admin__button_create"}`}
                    >New bouquet</button>
                </div>
            </section>
        )
    }
    handleClickNewBouquet = () => {
        this.setState({
            newBouquet: !this.state.newBouquet
        })
    }
};


export default Catalog;