import React, {Component} from 'react';

class CatalogItem extends Component {
    render() {
        const {bouquet} = this.props;
        return (
            <li className="catalog__item">
                <div className="catalog__item_left">
                    <input className="catalog__item_checkbox" type="checkbox"></input>
                    <div className="catalog__item_pic-container">
                        <img className="catalog__item_pic-preview"></img>
                    </div>
                    <div className="catalog__item_title">{bouquet.name}</div>
                    <div className="catalog__item_price">{bouquet.price}</div>
                </div>
                <div className="catalog__item_right">
                    <div className="catalog__item_rotate">
                        <div className="catalog__item_rotate_piece"></div>
                    </div>
                    <button className="admin__button_item_close"></button>
                </div>
            </li>
        )
    }
};

export default CatalogItem;