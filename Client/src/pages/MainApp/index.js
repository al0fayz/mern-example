import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CreateBlog } from '../CreateBlog';
import { DetailBlog } from '../DetailBlog';
import { Footer, Header } from '../../components';
import { Home } from '../Home';
import './mainApp.scss';

export const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header />  
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/create-blog">
                            <CreateBlog />
                        </Route>
                        <Route path="/detail-blog">
                            <DetailBlog />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />  
        </div>
    )
}
