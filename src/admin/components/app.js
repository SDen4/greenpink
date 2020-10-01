import React, {Component} from 'react';
import Catalog from "./catalog";
import LastBouquets from "./lastBouquets";
import Login from "./login";


class App extends Component {
    state = {
        activeCatalog: true
    }
    render() {
        const catalog = this.state.activeCatalog && <Catalog />
        const lastBouquets = !this.state.activeCatalog && <LastBouquets />
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
                            <a onClick={this.changeToCatalog}
                               className={`${this.state.activeCatalog && "admin__nav_active"} ${"admin__nav_link"}`}
                            >Catalog</a>
                            <a onClick={this.changeToLastBouquets}
                               className={`${!this.state.activeCatalog && "admin__nav_active"} ${"admin__nav_link"}`}
                            >Last bouquets</a>
                        </nav>
                    </div>
                    {catalog}
                    {lastBouquets}
                </main>
            </div>
        )
    }
    changeToCatalog = () => {
        this.setState({
            activeCatalog: true
        })
    }
    changeToLastBouquets = () => {
        this.setState({
            activeCatalog: false
        })
    }
};

export default App;