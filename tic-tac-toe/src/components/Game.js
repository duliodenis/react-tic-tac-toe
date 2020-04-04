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

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={(i)=>this.onClick(i)}
          boxes={current.boxes} />
        </div>
        
      </div>
    )
  }
}
