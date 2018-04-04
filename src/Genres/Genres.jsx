import React from 'react';
import ReactDOM from 'react-dom';
import GenreList from './GenreList';

class Genres extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: '0',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleStateInteger = this.handleStateInteger.bind(this)
        this.randomValue = this.randomValue.bind(this)
    }
    generateGenres() {
        let randomGenres = []
        let randomGenreElements = []
        if (!isNaN(parseInt(this.state.value)) ){
        while (randomGenres.length <= parseInt(this.state.value) - 1 ) {
            let randomIndex = Math.floor(Math.random()*1000)
            if (!randomGenres.includes(this.props.list[randomIndex])){
                randomGenres.push(<li>{this.props.list[randomIndex]}  &nbsp;
                    <a target="_blank" href={`http://www.google.com/search?q=${this.props.list[randomIndex]}%20music`}>? </a>
                    </li>);
            }
        }

        // for(let genres in randomGenres){
        //     randomGenreElements.push(<li> {genres} </li>)
        // }
        }

        return randomGenres;

        
    }

    handleChange(e){
        // if ((this.genreCount.value)){
            this.setState({
                value: this.genreCount.value
            });
        // }
    }

    handleStateInteger() {
        if(isNaN(parseInt(this.state.value))) {
            return "";
        } else {
            return this.state.value;
        }
    }

    randomValue() {
        this.setState({
            value: Math.ceil(Math.random() * 9)
        });
    }

    render() {
        let genresList = this.generateGenres();
        return (
            <div>
                <h1>Genres</h1>
                <div>
                <h2>How many genres?</h2>
                    <input type="number"
                    min = '0'
                    max = '20'
                        value={this.handleStateInteger()} 
                        ref={input => {this.genreCount = input;}}
                         onChange={this.handleChange}/>
                         <br/>
                         <br/>
                         <button onClick={this.randomValue}> Random </button>
                         <button onClick={this.handleChange}>Reshuffle</button>
                <ol className="genreList list">
                    {genresList}
                </ol>
                </div>
            </div>

        );
    }
}

export default Genres;