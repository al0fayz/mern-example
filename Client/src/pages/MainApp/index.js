import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CreateBlog } from '../CreateBlog';
import { DetailBlog } from '../DetailBlog';
import { Footer, Header } from '../../components';
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
                    </Switch>
                </Router>
            </div>
            <Footer />  
        </div>
    )
}
