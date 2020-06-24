import React, {Component} from 'react';

class CatalogItem extends Component {
    render() {
        return (
            <li className="catalog__item">
                <div className="catalog__item_left">
                    <input className="catalog__item_checkbox" type="checkbox"></input>
                    <img className="catalog__item_pic-preview"></img>
                    <div className="catalog__item_title">Bouquet1</div>
                    <div className="catalog__item_price">1499</div>
                </div>
                <div className="catalog__item_rotate">
                    <div className="catalog__item_rotate_piece"></div>
                </div>
            </li>
        )
    }
};

export default CatalogItem;