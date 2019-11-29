
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
        else if(button === "Drop"){
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





        var tableau = [];
        var tableau2 = [];

        //definition d'un tableau qui ne contiendra que les chiffres

        var tableau_sans_signes = [];

        // Définition d'un tableau qui ne contiendra que les signes 

        var tableau_sans_chiffre = [];
        

        // Init du tableau en String => Parcours du tableau ok 
        /*for (let pas = 0; pas <= this.state.result.length -1; pas++){
           
            
            tableau.push(this.state.result[pas]);
            //console.log(tableau[pas]);
        
        }
*/

        

        for (let pas = 0; pas <= this.state.result.length ; pas++) {
     
            //console.log(tableau[pas]);

            if (this.state.result[pas] === "0"||this.state.result[pas] === "1" || this.state.result[pas] === "2"|| this.state.result[pas] === "3" || this.state.result[pas] === "4" || this.state.result[pas] === "5"|| this.state.result[pas] === "6"|| this.state.result[pas] === "7"|| this.state.result[pas] === "8"|| this.state.result[pas] === "9"){

            //if ( Number.isInteger(this.state.result[pas])=== true){
                
                var temp = parseInt(this.state.result[pas]);
                tableau2.push(temp);
                tableau_sans_signes.push(temp);
                
               
            }

            else {

                tableau2.push(this.state.result[pas]);
                tableau_sans_chiffre.push(this.state.result[pas])

            }


        }     

            //else if (this.state.result[pas] == parseInt("*") || this.state.result[pas] == parseInt("/")|| this.state.result[pas] == parseInt("+") || this.state.result[pas] ==parseInt("-")){
             
                for (let pas = 0; pas <= tableau_sans_signes.length-2 ; pas++) {
            for (let pas = 0; pas <= tableau_sans_chiffre.length-2 ; pas++) {
          
                if (tableau_sans_chiffre[pas]==="*"){

                        
                        //var tab_resultat =[];
                        var temp2 = tableau_sans_signes[0]*tableau_sans_signes[pas+1];
                        this.setState({
                                result: temp2            
                        })
                        tableau.push(temp2);
                        
                        console.log(tableau);
                        //console.log(tableau2[pas+2]);
                        //console.log(tableau2[pas]*tableau2[pas+1]);

                
            }

            if (tableau_sans_chiffre[pas]==="+"){

                        
                //var tab_resultat =[];
                var temp2 = tableau_sans_signes[0]+tableau_sans_signes[pas+1];
                this.setState({
                        result: temp2            
                })
                tableau.push(temp2);
                
                console.log(tableau);
                //console.log(tableau2[pas+2]);
                //console.log(tableau2[pas]*tableau2[pas+1]);

        
    }

    if (tableau_sans_chiffre[pas]==="/"){

                        
        //var tab_resultat =[];
        var temp2 = tableau_sans_signes[0]/tableau_sans_signes[pas+1];
        this.setState({
                result: temp2            
        })
        tableau.push(temp2);
        
        console.log(tableau);
        //console.log(tableau2[pas+2]);
        //console.log(tableau2[pas]*tableau2[pas+1]);


}

if (tableau_sans_chiffre[pas]==="-"){

                        
    //var tab_resultat =[];
    var temp2 = tableau_sans_signes[0]-tableau_sans_signes[pas+1];
    this.setState({
            result: temp2            
    })
    tableau.push(temp2);
    
    console.log(tableau);
    //console.log(tableau2[pas+2]);
    //console.log(tableau2[pas]*tableau2[pas+1]);


}
        
        }}

            tableau2.pop();
            console.log(tableau2);


            for (let pas = 0; pas <= tableau2.length-2 ; pas++) {
            
            this.setState({
                result: tableau[0]         
        })
    }

            tableau_sans_chiffre.pop();
           
            console.log(tableau_sans_signes);
            console.log(tableau_sans_chiffre);
                
                // Affichage des signes dans le tableau 
                //var temp_signe = this.state.result[pas];
                //tableau2.push(temp_signe);
            
            
            

          


          // On agit directement sur la pile obtenant les opérations 
         //
         

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
