import {Route, Switch} from 'react-router-dom';
import AllMeetupsPage from './pages/all-meetups.page';
import NewMeetupPage from './pages/new-meetup.page';
import FavoritesPage from './pages/favorites.page';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/'>
        <AllMeetupsPage/>
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage/>
      </Route>
      <Route path='/favorites'>
        <FavoritesPage/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
