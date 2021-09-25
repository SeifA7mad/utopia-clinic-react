import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './ui/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
