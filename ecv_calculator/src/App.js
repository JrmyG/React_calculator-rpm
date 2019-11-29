
import React, { Component } from 'react';
import './App.css';
import CalculatriceComponent from "./components/CalculatriceComponent";

class App extends Component{

    state = {
        stack: [],
        width: window.innerWidth
    }

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculatrice</h1>
                    <CalculatriceComponent/>
                    <h2>Created by</h2>
                    <h3>Alexander Venet & Jeremy Guibon</h3>
                </div>
            </div>
        );
    }
}

export default App;
