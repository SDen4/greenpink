import React, {Component} from 'react';
import { defaults } from 'autoprefixer';

class Login extends Component {
    render() {
        return (
            <div className="admin__login">
                <div className="admim__login_block">
                    <button className="admin__button_login_close"></button>
                    <div className="admin__login_wrapper">
                        <div className="admin__login_title">Authorisation</div>
                        <div className="admin__login_content">
                            <form className="admin__login_form">
                                <label className="admin__login_form_data">
                                    <div className="admin__login_form_pic admin__login_form_pic_login"></div>
                                    <div className="admin__login_form_info">
                                        <div className="admin__login_form_name">Login</div>
                                        <input className="admin__login_form_input" type="text" placeholder="Enter login"></input>
                                        <div className="admin__login_error">Enter login</div>
                                    </div>
                                </label>
                                <label className="admin__login_form_data">
                                    <div className="admin__login_form_pic admin__login_form_pic_password"></div>
                                    <div className="admin__login_form_info">
                                        <div className="admin__login_form_name">Password</div>
                                        <input className="admin__login_form_input" type="password" placeholder="Enter password"></input>
                                        <div className="admin__login_error">Enter password</div>
                                    </div>
                                </label>
                                <button className="admin__button admin__login_button" type="submit">Enter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Login;