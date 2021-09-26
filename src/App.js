import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Offers from './pages/offers/Offers';
import Layout from './ui/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/offers'>
          <Offers />
        </Route>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
