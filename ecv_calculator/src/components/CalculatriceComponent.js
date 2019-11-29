import React, {Component} from 'react';

class Calculatrice extends Component {

    state = {
        stack: [],
        width: window.innerWidth
    }

    pushToTable = () => {
        const values = this.state.stack;
        this.setState({stack: [0,...values]});
        console.log('Push in the table');
    }

    checkValue = (value) => {
        const values = this.state.stack;
        let currentValue = values[0];
        currentValue = currentValue ? currentValue.toString() +value.toString() : value.toString();
        currentValue = currentValue ? currentValue: 0
        this.setState({stack: [currentValue,...values.slice(1)]});
        console.log(currentValue);
    }

    reset = () => {
        this.setState({stack: []})
        console.log('reset')
    };

    
    drop = () => {
        this.setState({stack: this.state.stack.slice(0, -1)})
        console.log('drop');
    };

    swap = () => {
        const values = this.state.stack
        let currentValue = values[1];
        values[1] = values[0];
        values[0] = currentValue;
        this.setState({stack: [currentValue,...values.slice(1)]})
        console.log(currentValue)
    }

    addition = () => {
        const values = this.state.stack;
        let currentValue = parseFloat(values[1], 10) + parseFloat(values[0], 10);
        currentValue = currentValue.toString();
        this.setState({stack: [currentValue,...values.slice(2)]})
        console.log(currentValue)
    }

    soustraction = () => {
        const values = this.state.stack;
        let currentValue = parseFloat(values[1], 10) - parseFloat(values[0], 10);
        currentValue = currentValue.toString();
        this.setState({stack: [currentValue,...values.slice(2)]})
        console.log(currentValue)
    }
    
    multiplication = () => {
        const values = this.state.stack;
        let currentValue = parseFloat(values[1], 10) * parseFloat(values[0], 10);
        currentValue = currentValue.toString();
        this.setState({stack: [currentValue,...values.slice(2)]})
        console.log(currentValue)
    }

    division = () => {
        const values = this.state.stack;
        let currentValue = parseFloat(values[1], 10) / parseFloat(values[0], 10);
        currentValue = currentValue.toString();
        this.setState({stack: [currentValue,...values.slice(2)]})
        console.log(currentValue)
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <section className="result">
                    <p>{this.state.stack[3]}  {this.state.stack[2]}  {this.state.stack[1]}  {this.state.stack[0]}</p>
                </section>
                
                <section className="button">
                    <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                    <button name="swap" onClick={() => this.swap()}>Swap</button>
                    <button name="Del" click={() => this.drop()}>Drop</button>
                    <button name="Del all" onClick={() => this.reset()}>Del all </button><br/>

                    <button name="1" onClick={() => this.checkValue(1)}>1</button>
                    <button name="2" onClick={() => this.checkValue(2)}>2</button>
                    <button name="3" onClick={() => this.checkValue(3)}>3</button>
                    <button name="+" onClick={() => this.addition()}>+</button><br/>

                    <button name="4" onClick={() => this.checkValue(4)}>4</button>
                    <button name="5" onClick={() => this.checkValue(5)}>5</button>
                    <button name="6" onClick={() => this.checkValue(6)}>6</button>
                    <button name="-" onClick={() => this.soustraction()}>-</button><br/>

                    <button name="7" onClick={() => this.checkValue(7)}>7</button>
                    <button name="8" onClick={() => this.checkValue(8)}>8</button>
                    <button name="9" onClick={() => this.checkValue(9)}>9</button>
                    <button name="*" onClick={() => this.multiplication()}>x</button><br/>

                    <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                    <button name="0" onClick={() => this.checkValue(0)}>0</button>
                    <button name="Enter" onClick={() => this.pushToTable()}>Enter</button>
                    <button name="/" onClick={() => this.division()}>÷</button><br/>
                </section>
            </div>
        );
    }
}

export default Calculatrice;