import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Cards from '../../components/Cards/Cards';
import './Home.scss';
import movie from '../../services/movie';

class home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            movies: [],
        };

    }

    componentWillMount() {
        this.loadData();
    }

    async loadData() {
        const { data } = await movie.list();  
        
        this.setState({ data: data });
        this.setState({ movies: data.results });
    }

    render() {
        return (
            <div className="container">
                <Cards movies={this.state.movies} />
            </div>
        );
    }
}

export default home;
