import React from 'react';

class Countercomponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: 5
        }
    }
    handleIncrement=()=>{
        this.setState({ value: ++this.state.value })
    }
    render() {
        const handleReset=()=>{
            this.setState({value:5})
        }

        return (
            
            <>
                <h2>this is {this.props.ComponentName}</h2>
                value:{this.state.value}<br /><br />
                {/* updating the state variable */}
                {/* <button onClick={() => this.setState({ value: ++this.state.value })}>increment</button> &nbsp;
                <button onClick={() => this.setState({ value: --this.state.value })}>decrement</button> */}
                <button onClick={this.handleIncrement}>increment</button> &nbsp;
                <button onClick={this.handleDecrement }>decrement</button>
                <button onClick={handleReset}>Reset</button>
            </>
            
        )
    }

}
export default Countercomponent;