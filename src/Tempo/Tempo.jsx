import React from 'react';

class Tempo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bpm: 40
        }
        //TODO
        //Add Hold Option

        this.handleChange = this.handleChange.bind(this);
        this.randomBPM = this.randomBPM.bind(this);
    }

    handleChange() {
        this.setState({
            bpm: this.bpmBar.value
        });
    }

    randomBPM() {
        this.setState({
            bpm: Math.floor(Math.random() * (220 - 40) + 40)
        });
    }

    render() {
        return (
        <div>
            <h1>BPM</h1>
            <h2> {'What\'s your BPM?'} </h2>
            <input type="number"
                min = "40"
                max = "500"
                ref = {input => {this.bpmBar = input;}}
                value={this.state.bpm}
                onChange={this.handleChange}/>
                <br/>
                <br/>
            <button onClick={this.randomBPM}>Randomize</button>
        </div>
        )
    }
}

export default Tempo;