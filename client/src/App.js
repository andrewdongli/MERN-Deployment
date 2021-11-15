import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Details from './views/Details';
import New from './views/New';


function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route exact path="/pirate/new">
                        <New />
                    </Route>
                    <Route exact path="/pirate/:id">
                        <Details />
                    </Route>
                    <Route exact path="/examples/:id/edit">
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
