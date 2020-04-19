import React, { Component } from 'react';
import Die from './Die';

const options = [1, 2, 3, 4, 5, 6];

const getRandomElFromArr = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
};

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstDieStatus: options[0],
            secondDieStatus: options[5]
        }
    }

    roll = () => {
        const randomFirst = getRandomElFromArr(options);
        const randomSecond = getRandomElFromArr(options);
        setTimeout(() => {
            this.setState({
                firstDieStatus: randomFirst,
                secondDieStatus: randomSecond
            })
        }, 300);
    }

    render(){
        const {firstDieStatus, secondDieStatus} = this.state;
        return (
            <div>
                <h1>Roll the Dice</h1>

                <Die firstDieStatus={firstDieStatus} secondDieStatus={secondDieStatus} />
                <button className="button" onClick={this.roll}> Zar At </button>

                {
                    firstDieStatus === secondDieStatus && <h3>Zarlar Aynı.</h3>
                }

            </div>
        )
    }
};

export default RollDice;