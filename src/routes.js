import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" exact component={Detail} />
        </BrowserRouter>
    );
}