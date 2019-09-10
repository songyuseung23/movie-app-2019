import React from "react"; //react uses virtual DOM

class App extends React.Component {
  //state is object. data changes within in it
  state = {
    count: 0
  };

  //setState refresh the state, and refresh render method
  //when setState is called, it rerender with new state which is inside of it
  //if we change state in mutable way, render wouldn't refresh itself
  plus = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  };
  minus = () => {
    this.setState({ count: this.state.count - 1 }); //setState(new state<object>)
  };

  render() {
    //automatically execution class component doesn't have return. render method shows on screen
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.plus}>plus</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
