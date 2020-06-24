import React, {Component} from 'react';

class CatalogNewBouquet extends Component {
    render() {
        return (
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
        )
    }
};


export default CatalogNewBouquet;