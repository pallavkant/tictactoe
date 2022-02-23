import React from "react";
import ReactDOM from "react-dom";
import './index.css';

function Box(props) {
    return (
      <button className="box" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  class Grid extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        boxes: Array(9).fill(null),
        xIcon: true,
      };
    }

    playerClick(i) {
        const boxes = this.state.boxes.slice();
        boxes[i] = this.state.xIcon ? 'X' : 'O';
        this.setState({
            boxes: boxes,
          xIcon: !this.state.xIcon,
        });
      }

      renderBox(i) {
        return (
          <Box
            value={this.state.boxes[i]}
            onClick={() => this.playerClick(i)}
          />
        );
      }
      render() {
        const status = 'Next turn: ' + (this.state.xIcon ? 'X' : 'O');
        return (
          <div>
            <div className="status"><h1>{status}</h1></div><br></br>
            <div className="grid-row">
              {this.renderBox(0)}
              {this.renderBox(1)}
              {this.renderBox(2)}
            </div>
            <div className="grid-row">
              {this.renderBox(3)}
              {this.renderBox(4)}
              {this.renderBox(5)}
            </div>
            <div className="grid-row">
              {this.renderBox(6)}
              {this.renderBox(7)}
              {this.renderBox(8)}
            </div>
          </div>
        );
      }        
}

class TicTacToe extends React.Component {
    render() {
      return (
        <div className="play">
          <div className="play-grid">
            <Grid />
          </div>
        </div>
      );
    }
  }
  
ReactDOM.render(<TicTacToe />, document.getElementById('root'));