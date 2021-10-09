import { Switch, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../store/auth-context';

import Archives from './archives/Archives';

const pathname = '/dashboard';
const routes = {
  admin: [
      <Route path={`${pathname}/reports`} key={`${pathname}/reports`}> </Route>,
      <Route path={`${pathname}/archives`} key={`${pathname}/archives`}> <Archives /></Route>
  ],
  doctor: [
      <Route path={`${pathname}/tasks`} key={`${pathname}/tasks`}></Route>,
      <Route path={`${pathname}/questions`} key={`${pathname}/questions`}></Route>
  ],
  user: null
};


const DashboardContent = () => {
  const { userToken } = useContext(AuthContext);
  return (
    <Switch>
      <Route path={`${pathname}`} exact></Route>
      <Route path={`${pathname}/profile`}></Route>
      {routes[userToken.type]}
    </Switch>
  );
};

export default DashboardContent;
