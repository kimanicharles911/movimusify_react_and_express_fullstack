import "./App.css";
import {NavbarComponent, MainComponent, FavouritesComponent} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<MainComponent/>}></Route>
        <Route path="/favourites" element={<FavouritesComponent/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
