import React, { Component } from 'react';
import Navbar from './Navbar';
import Alert from './Alert';
import Scores from './Scores';
import data from '../data.json';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            score: 0,
            topScore: 0
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    componentDidMount() {
        this.setState({ data: this.randomize(this.state.data) });
    }

    handleItemClick(id) {
        console.log(id);
        let correctlyGuessed = false;
        const newData = this.state.data.map(item => {
            // Test & see if ID is clicked or not

            const newItem = { ...item }
            if (newItem.id === id && !newItem.clicked) {
                newItem.clicked = true;
                correctlyGuessed = true;
            }
            return newItem;
        })
        if (correctlyGuessed) {
            // here update new score
            // update top score
            // reshuffle data
        } else {
            // set score to 0
            // reset data (all click events set to false)
            // re randomize the data
        }
    }

    randomize(data) {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    }


    render() {
        const items = this.state.data.map(item => (
            <img key={item.id} id={item.id} src={item.image} onClick={this.handleItemClick(item.id)} ></img>
        ));
        return (
            <div>
                <Navbar />
                <Alert />
                <Scores />

                <div>
                    {items}
                </div>
            </div>
        )
    }

}

export default Game;