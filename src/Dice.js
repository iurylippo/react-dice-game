import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
    static defaultProps = {
        diceNumber : "one",
        diceSize   : "10"
    }

    render() {
        let {diceNumber, diceSize} = this.props;
        let shake = this.props.rolling ? "miniBounce" : '';
        let dice  = `fas fa-dice-${diceNumber} fa-${diceSize}x ${shake}`;

        return (
            <span className="Dice">
                <i className={dice}></i>
            </span>
        )
    }
}

export default Dice;
