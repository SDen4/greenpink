import React, {Component} from 'react';
import { defaults } from 'autoprefixer';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login__block">
                    <button className="admin__button_login_close"></button>
                    <div className="login__wrapper">
                        <div className="login__title">Authorisation</div>
                        <div className="login__content">
                            <form className="login__form">
                                <label className="login__form_data">
                                    <div className="login__form_pic login__form_pic_login"></div>
                                    <div className="login__form_info">
                                        <div className="login__form_name">Login</div>
                                        <input className="login__form_input" type="text" placeholder="Enter login"></input>
                                        <div className="login__error">Enter login</div>
                                    </div>
                                </label>
                                <label className="login__form_data">
                                    <div className="login__form_pic login__form_pic_password"></div>
                                    <div className="login__form_info">
                                        <div className="login__form_name">Password</div>
                                        <input className="login__form_input" type="password" placeholder="Enter password"></input>
                                        <div className="login__error">Enter password</div>
                                    </div>
                                </label>
                                <button className="admin__button login__button" type="submit">Enter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Login;