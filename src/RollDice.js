import React, { Component } from 'react';
import Dice from './Dice';
import './RollDice.css'

class RollDice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dice1: "one",
             dice2: "one",
             buttonClick: false,
             handleBtn  : this.executeFunc.bind(this)
        }
    }

    static defaultProps = {
        dice: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    executeFunc(e) {
        // this.clickBtn();
        this.roll();
    }

    // clickBtn(e) {

    //     if(this.state.buttonClick) {
    //         const btn = document.getElementsByClassName("fas");
    //         this.setState({buttonClick: false});
    //         btn.classList.remove("miniBounce");
    //     } else {
    //         const btn = document.getElementsByClassName("fas");
    //         // btn.classList.add("miniBounce");
    //         this.setState({buttonClick: true});
    //     }
    // }

    roll() {

        if(!this.state.buttonClick) {
            let dice = this.props.dice;

            let randomNumber1 = Math.floor(Math.random() * dice.length);
            let randomNumber2 = Math.floor(Math.random() * dice.length);
            
            this.setState({
                dice1: dice[randomNumber1], 
                dice2: dice[randomNumber2],
                buttonClick: true
            });

            setTimeout(() => {
                this.setState({buttonClick: false})
            }, 1000);

        }
        
    }

    render() {
        let btnTitle = this.state.buttonClick ? "Rolling..." : "Roll Dice";
        
        return (
            <div className="RollDice">
                <h1>Roll Dice</h1>
                <Dice 
                diceNumber = {this.state.dice1} 
                rolling={this.state.buttonClick}
                />

                <Dice 
                diceNumber = {this.state.dice2}
                rolling={this.state.buttonClick}
                />

                <button onClick={this.state.handleBtn} className="RollDice-btn" disabled={this.state.buttonClick}>{btnTitle}</button>
            </div>
        )
    }
}

export default RollDice;
