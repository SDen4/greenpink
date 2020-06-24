import React, {Component} from 'react';
import CatalogList from "./catalogList";
import CatalogNewBouquet from "./catalogNewBouquet";


class Catalog extends Component {
    render() {
        return (
            <section className="admin admin__catalog">
                <CatalogNewBouquet />
                <CatalogList />
                <div className="catalog__footer">
                    <div className="catalog__footer_delete">
                        <input className="catalog__footer_all-items" type="checkbox"></input>
                        <button className="admin__button admin__button_delete">Delete</button>
                    </div>
                    <button className="admin__button admin__button_create">New bouquet</button>
                </div>
            </section>
        )
    }
};


export default Catalog;