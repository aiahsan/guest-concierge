import logo from './logo.svg';
import './style/style.css';
import Yourlocation from './pages/yourlocation';
import PeronsalInfo from './pages/personalinfo';
import Hotel from './pages/hotel';
import FlightTable from './pages/flightTable';
import FlightOthers from './pages/flightOthers';
import Flight from './pages/flight';
import Confirmation from './pages/confirmation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Yourlocation />
        </Route>
        <Route exact path='/flight'>
          <Flight />
        </Route>
        <Route exact path='/flight-book'>
          <FlightTable />
        </Route>
        <Route exact path='/flight-other'>
          <FlightOthers />
        </Route>
        <Route exact path='/hotel'>
          <Hotel />
        </Route>
        <Route exact path='/personal-info'>
          <PeronsalInfo />
        </Route>
        <Route exact path='/confirm'>
          <Confirmation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
