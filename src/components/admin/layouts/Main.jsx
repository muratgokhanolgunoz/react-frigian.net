import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Blog from '../pages/Blog'
import NotFound from '../../errors/NotFound'

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/sarici2021/blog">
                    <Blog />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}
export default Main