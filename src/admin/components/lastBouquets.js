import React, {Component} from 'react';


class LastBouquets extends Component {
    render() {
        const {activeSection} = this.props;
        return (
            <section className={`${activeSection === "LastBouquets" ? "admin admin__lastBouquets_active" : "admin__lastBouquets"}`}>
                <h2>Last Bouquets</h2>
            </section>
        )
    }
};


export default LastBouquets;