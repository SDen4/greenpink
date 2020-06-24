import React, {Component} from 'react';
import CatalogItem from "./catalogItem.js";


class App extends Component {
    render() {
        return (
            <div className="admin-wrapper">
                <header className="admin__header">
                    <h1 className="admin__title">"Green Pink" admin panel</h1>
                    <button className="admin__button admin__button_exit">Exit</button>
                </header>
                <main className="admin__main">
                    <div className="admin__nav_container">
                        <nav className="admin__nav">
                            <a className="admin__nav_link">Catalog</a>
                            <a className="admin__nav_link">Last bouquets</a>
                        </nav>
                    </div>
                    <section className="admin admin__catalog">
                        <div className="catalog__new-bouquet">
                            <h2 className="admin__subtitle">Add the new bouquet</h2>
                            <form className="admin__new-bouquet_form">
                                <div className="admin__new-bouquet_form_part admin__new-bouquet_form_part_left">
                                    <label className="admin__new-bouquet_form_label">
                                        <div className="admin__new-bouquet_form_name">Name</div>
                                        <input placeholder="Enter the name of the bouquet"></input>
                                    </label>
                                    <label className="admin__new-bouquet_form_label">
                                        <div className="admin__new-bouquet_form_name">Price</div>
                                        <input placeholder="Enter the price"></input>
                                    </label>
                                    <label className="admin__new-bouquet_form_label">
                                        <div className="admin__new-bouquet_form_name">Description</div>
                                        <textarea className="admin__new-bouquet_form_textarea" placeholder="Enter the description"></textarea>
                                    </label>
                                </div>
                                <div className="admin__new-bouquet_form_part admin__new-bouquet_form_part_right">
                                    <label className="admin__new-buoquet_download" for="admin__add_bouquet-photo">
                                        <span className="admin__new-buoquet_download_text">Download photo</span>
                                        <button className="admin__button">Download</button>
                                    </label>
                                    <input id="admin__add_bouquet-photo" type="file"></input>
                                    <div className="admin__new-bouquet_form_submit">
                                        <button type="reset" className="admin__button admin__button_form_cancel">Cansel</button>
                                        <button type="submit" className="admin__button admin__button_form_save">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
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
                        <div className="catalog__footer">
                            <div className="catalog__footer_delete">
                                <input className="catalog__footer_all-items" type="checkbox"></input>
                                <button className="admin__button admin__button_delete">Delete</button>
                            </div>
                            <button className="admin__button admin__button_create">New bouquet</button>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
};

export default App;