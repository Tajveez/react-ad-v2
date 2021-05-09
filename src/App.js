import {Route} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites'
import NewMeetupsPage from './pages/NewMeetups' 

function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetupsPage/>
      </Route>
      <Route path="/new-meetups">
        <NewMeetupsPage/>
      </Route>
      <Route path="/favorites">
        <FavoritesPage/>
      </Route>
    </div>
  );
}

export default App;
