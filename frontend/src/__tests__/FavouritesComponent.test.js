import { expectCt } from 'helmet';
import renderer from 'react-test-renderer';
import {FavouritesComponent} from '../components';

it('FavouritesComponent renders correctly', () => {
  const favourites = [
    {
      id: 1,
      title: "delectus aut autem",
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
    },
    {
      id: 3,
      title: "fugiat veniam minus",
    }
  ];
  const setFavourites = () => {
    return favourites;
  };
  const tree = renderer.create(<FavouritesComponent favouritesProp={favourites} setFavouritesProp={setFavourites}/>).toJSON();
  expect(tree).toMatchSnapshot();
})