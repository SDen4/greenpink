import React, {Component} from 'react';

class CatalogNewBouquet extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }
    state = {
        bouquetName: "",
        bouquetPrice: 999,
        bouquetDescription: "",
        bouquetPic: {}
    }
    render() {
        const {handleClickNewBouquet} = this.props;
        return (
            <div className={`${handleClickNewBouquet ? "catalog__new-bouquet_active" : "catalog__new-bouquet"}`}>
                <h2 className="admin__subtitle">Add the new bouquet</h2>
                <form className="admin__new-bouquet_form" onSubmit={this.sendNewBouquet}>
                    <div className="admin__new-bouquet_form_part admin__new-bouquet_form_part_left">
                        <label className="admin__new-bouquet_form_label">
                            <div className="admin__new-bouquet_form_name">Name</div>
                            <input 
                                type="text"
                                placeholder="Enter the name of the bouquet" 
                                value={this.state.bouquetName} 
                                onChange={this.handleChange} 
                                name="bouquetName"
                            ></input>
                        </label>
                        <label className="admin__new-bouquet_form_label">
                            <div className="admin__new-bouquet_form_name">Price</div>
                            <input 
                                type="number"
                                placeholder="Enter the price" 
                                value={this.state.bouquetPrice} 
                                onChange={this.handleChange}
                                name="bouquetPrice"
                            ></input>
                        </label>
                        <label className="admin__new-bouquet_form_label">
                            <div className="admin__new-bouquet_form_name">Description</div>
                            <textarea 
                                className="admin__new-bouquet_form_textarea" 
                                placeholder="Enter the description" 
                                value={this.state.bouquetDescription} 
                                onChange={this.handleChange}
                                name="bouquetDescription"
                            ></textarea>
                        </label>
                    </div>
                    <div className="admin__new-bouquet_form_part admin__new-bouquet_form_part_right">
                        <label className="admin__new-buoquet_download" htmlFor="admin__add_bouquet-photo">
                            <input 
                                id="admin__add_bouquet-photo" 
                                type="file" 
                                name="bouquetPic"
                                accept="image/*"
                                ref={this.fileInput}
                            ></input>
                            <span className="admin__new-buoquet_download_text">Download photo</span>
                            <div className="admin__button">Download</div>
                        </label>
                        <div className="admin__new-bouquet_form_submit">
                            <button 
                                type="reset" 
                                className="admin__button admin__button_form_cancel"
                            >Cansel</button>
                            <button 
                                type="submit" 
                                className="admin__button admin__button_form_save"
                            >Save</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.name === "bouquetPic" ? this.fileInput.current.files[0] : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    sendNewBouquet = (event) => {
        event.preventDefault();
        alert("New bouquet name: " + this.state.bouquetName + ", price: " + this.state.bouquetPrice + ", description: " + this. state.bouquetDescription + ", photo: " + this.state.bouquetPic);
        console.log(this.fileInput.current.files[0].name);
        console.log(this.state.bouquetPic);
    }
};


export default CatalogNewBouquet;