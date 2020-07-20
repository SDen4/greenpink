import React, {Component} from 'react';


class CatalogNewBouquet extends Component {
    state = {
        file: '',
        imagePreviewUrl: '',

        bouquetName: "",
        bouquetPrice: 0,
        bouquetDescription: "",
        bouquetPic: "",
        // validation
        formErrors: {bouquetName: "", bouquetPrice: "", bouquetDescription: "", bouquetPic: ""},
        bouquetNameValid: false,
        bouquetPriceValid: false,
        bouquetDescriptionValid: false,
        bouquetPicValid: false,
        formValid: false
    }
    handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
    
        reader.readAsDataURL(file)
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
                            <div className={`${!this.state.bouquetNameValid ? "admin__new-bouquet_form_error" : "admin__new-bouquet_form_error_unactive"}`}>Enter the name of the bouquet</div>
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
                            <div className={`${!this.state.bouquetPriceValid ? "admin__new-bouquet_form_error" : "admin__new-bouquet_form_error_unactive"}`}>Enter the name of the bouquet</div>
                            {/* <div className="admin__new-bouquet_form_error">Enter the price</div> */}
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
                            <div className={`${!this.state.bouquetDescriptionValid ? "admin__new-bouquet_form_error" : "admin__new-bouquet_form_error_unactive"}`}>Enter the name of the bouquet</div>
                            {/* <div className="admin__new-bouquet_form_error">Enter the description</div> */}
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
                                onChange={(e)=>this.handleImageChange(e)}
                            ></input>
                            <img className={`${this.state.imagePreviewUrl && "admin__new-bouquet_photo_preload"}`} src={this.state.imagePreviewUrl}></img>
                            <span className="admin__new-buoquet_download_text">Download photo</span>
                            <div className="admin__button">Download</div>
                        </label>
                        <div className="admin__new-bouquet_form_submit">
                            <button 
                                type="reset" 
                                className="admin__button admin__button_form_cancel"
                                // from parent move the function handleClickNewBouquet to change the parent's state
                                onClick={() => {this.props.handleClear(false)}}
                            >Cansel</button>
                            <button 
                                type="submit" 
                                className="admin__button admin__button_form_save"
                                disabled={!this.state.formValid}
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
            [name]: value},
            () => {
                this.validateField(name, value)
            }
        )
    }
    sendNewBouquet = (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append("bouquetName", this.state.bouquetName);
        formData.append("bouquetPrice", this.state.bouquetPrice);
        formData.append("bouquetDescription", this.state.bouquetDescription);
        formData.append("bouquetPic", this.state.bouquetPic);

        let xhr = new XMLHttpRequest();
        xhr.open("POST", `http://localhost/new.php`);
        xhr.send(formData);

        // close the new bouquet window after adding new bouquet
        this.props.handleClear(false);
    }
    //validation
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let bouquetNameValid = this.state.bouquetNameValid;
        let bouquetPriceValid = this.state.bouquetPriceValid;
        let bouquetDescriptionValid = this.state.bouquetDescriptionValid;
        // let bouquetPicValid = this.state.bouquetPicValid;

        switch(fieldName) {
            case 'bouquetName': 
                bouquetNameValid = value.length >= 1;
                fieldValidationErrors.bouquetName = bouquetNameValid && true;
                break;
            case 'bouquetPrice': 
                bouquetPriceValid = value.length >=1 && value > 0;
                fieldValidationErrors.bouquetPrice = bouquetPriceValid && true;
                break;
            case 'bouquetDescription': 
                bouquetDescriptionValid = value.length >= 1;
                fieldValidationErrors.bouquetDescription = bouquetDescriptionValid && true;
                break;
            // case 'bouquetPic': 
            //     bouquetPicValid = value.length >= 1;
            //     fieldValidationErrors.bouquetPic = bouquetPicValid && true;
            //     break;
        }
        this.setState({formErrors: fieldValidationErrors,
            bouquetNameValid: bouquetNameValid,
            bouquetPriceValid: bouquetPriceValid,
            bouquetDescriptionValid: bouquetDescriptionValid,
            // bouquetPicValid: bouquetPicValid
            }, this.validateForm
        );
    }
    validateForm() {
        this.setState({formValid: 
            this.state.bouquetNameValid 
            && this.state.bouquetPriceValid 
            && this.state.bouquetDescriptionValid 
            // && this.state.bouquetPicValid
        })
    }
};

export default CatalogNewBouquet;