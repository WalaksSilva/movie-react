import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Cards from '../../components/Cards/Cards';
import './Home.scss';
import service from '../../services';

class home extends Component {
    componentWillMount() {
        this.loadData();
    }

    async loadData() {
        const data = await service.movie.list();       
    }

    render() {

        return (
            <div className="container">
                <Cards />
            </div>
        );
    }
}

export default home;
