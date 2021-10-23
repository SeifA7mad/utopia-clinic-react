import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from './store/auth-context';

import Home from './pages/home/Home';
import Offers from './pages/offers/Offers';
import Reservation from './pages/reservation/Reservation';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './ui/layout/Layout';

const App = () => {
  const { userToken, isLoggedIn } = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path='/offers'>
          <Offers />
        </Route>
        {isLoggedIn && (
          <Route path='/reservation'>
            <Reservation />
          </Route>
        )}
        {isLoggedIn && userToken.type !== 'user' && (
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        )}
        <Route path='/home' exact>
          <Home />
        </Route>
        <Redirect to='/home' />
      </Switch>
    </Layout>
  );
};

export default App;
