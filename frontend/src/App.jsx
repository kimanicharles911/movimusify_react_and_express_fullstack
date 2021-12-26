import "./App.css";
import {NavbarComponent, MainComponent, FavouritesComponent} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from 'react';

const App = () => {

  const [favourites, setFavourites] = useState([]);

  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<MainComponent favouritesProp={favourites} setFavouritesProp={setFavourites}/>}></Route>
        <Route path="/favourites" element={<FavouritesComponent favouritesProp={favourites} setFavouritesProp={setFavourites}/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
