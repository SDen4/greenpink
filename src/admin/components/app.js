import React, {Component} from 'react';
import Catalog from "./catalog";
import LastBouquets from "./lastBouquets";
import Login from "./login";


class App extends Component {
    state = {
        activeSection: "Catalog"
    }
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
                            <a onClick={this.changeSectionToCatalog}
                               className={`${this.state.activeSection === "Catalog" && "admin__nav_active"} ${"admin__nav_link"}`}
                            >Catalog</a>
                            <a onClick={this.changeSectionToLastBouquets}
                               className={`${this.state.activeSection === "LastBouquets" && "admin__nav_active"} ${"admin__nav_link"}`}
                            >Last bouquets</a>
                        </nav>
                    </div>
                    <Catalog activeSection={this.state.activeSection} />
                    <LastBouquets activeSection={this.state.activeSection} />
                </main>
            </div>
        )
    }
    changeSectionToCatalog = () => {
        this.setState({
            activeSection: "Catalog"
        })
    }
    changeSectionToLastBouquets = () => {
        this.setState({
            activeSection: "LastBouquets"
        })
    }
};

export default App;