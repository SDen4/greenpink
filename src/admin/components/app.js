import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className="admin-wrapper">
                <header className="admin__header">
                    <h1 className="admin__title">"Green Pink" admin panel</h1>
                    <button className="admin__button admin__button_exit">Exit</button>
                </header>
                <main className="admin__main">
                    <section className="admin admin__catalog">
                        <div className="catalog__content">
                            <h2 className="admim__subtitle">Catalog</h2>
                            <ul className="admin__window catalog__window">
                                <li className="catalog__item">
                                    <input className="catalog__item_checkbox" type="checkbox"></input>
                                    <img className="catalog__item_pic-preview"></img>
                                    <div className="catalog__item_title">Bouquet1</div>
                                    <div className="catalog__item_price">1499</div>
                                    <div className="catalog__item_rotate"></div>
                                </li>
                                <li className="catalog__item">
                                    <input className="catalog__item_checkbox" type="checkbox"></input>
                                    <img className="catalog__item_pic-preview"></img>
                                    <div className="catalog__item_title">Bouquet1</div>
                                    <div className="catalog__item_price">1499</div>
                                    <div className="catalog__item_rotate"></div>
                                </li>
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