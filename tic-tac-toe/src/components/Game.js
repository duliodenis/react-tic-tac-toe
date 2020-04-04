import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext:  true,
      stepNumber: 0,
      history: [
        {boxes: Array(9).fill(null)}
      ]
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber+1);
    const current = history[history.length-1];
    const boxes = current.boxes.slice();
    boxes[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat({
        boxes: boxes
      }), 
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={(i)=>this.handleClick(i)}
          boxes={current.boxes} />
        </div>
        
      </div>
    )
  }
}
