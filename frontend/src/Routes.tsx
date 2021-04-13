import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './core/components/Header';
import Home from './pages/Home';
import Records from './pages/Records';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/records">
                <Records />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
