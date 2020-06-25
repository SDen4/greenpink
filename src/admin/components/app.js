import React, {Component} from 'react';
import Catalog from "./catalog";
import Login from "./login";


class App extends Component {
    render() {
        return (
            <div className="admin-wrapper">
                <Login />
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
                    <Catalog />
                </main>
            </div>
        )
    }
};

export default App;