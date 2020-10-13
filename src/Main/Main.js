import React, { Component } from 'react';

class Main extends Component {
    state = {
        view: null
    }

    changeHeading = (event)=> {
        return console.log("Blabla");
    }

    render(){
        return (
            <section className="Main-views">
                <h2 click={this.changeHeading}>Heading</h2>
            </section>
        )
    }
}

export default Main;