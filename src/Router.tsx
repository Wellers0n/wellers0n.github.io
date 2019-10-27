import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LazyImport from './Components/LazyImport'
import NotFound from './Components/Screens/NotFound'
import Home from './Components/Screens/Home'
const Feedback = LazyImport(() => import('./Components/Screens/Feedback' /* webpackChunkName: 'Feedback' */))

const router = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact render={() => <Home name="Home" />} />
                    <Route path="/feedback" render={() => <Feedback name="feedback" />} />
                    <Route path="*" render={() => <NotFound name="NotFound" />} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

const notFound = () => {
    return <div>pag not found</div>
}

export default router
