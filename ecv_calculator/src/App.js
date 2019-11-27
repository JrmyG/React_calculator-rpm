
import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "Enter"){
            this.calculate()
        }

        else if(button === "Del all"){
            this.reset()
        }
        else if(button === "Del"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

/*
    calculate = () => {

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };
*/


calculate = () => {

    try {
        
        //Déclaration de la pile 

        // Il faut définir encore la régle pour que les chiffres effectuent la bonne opération.

        var tableau = [this.state.result];
        var mapile_tempo;
        //var mapile_tempo_signe;
        
        for (let pas = 0; pas <= this.state.result.length; pas++) {
     

            if (this.state.result[pas] !== "*" || this.state.result[pas] !== "/"|| this.state.result[pas] !== "+" || this.state.result[pas] !=="-")

            //if ( Number.isInteger(this.state.result[pas])=== true){
                var temp = parseInt(this.state.result[pas]);
                console.log(this.state.result[pas]);  
                mapile_tempo.push(temp);
                

                        

            if (this.state.result[pas] === "*" || this.state.result[pas] === "/"|| this.state.result[pas] === "+" || this.state.result[pas] ==="-"){

                mapile_tempo.push();
            }


            

          }


         

        }
    catch (e) {
        this.setState({
            result: "error"
        })

    }
};
    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculatrice</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
