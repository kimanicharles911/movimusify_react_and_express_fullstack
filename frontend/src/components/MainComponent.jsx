import {useState} from 'react';
import {SearchComponent, FiltersComponent, ResultsComponent} from './index.js';

const MainComponent = ({favouritesProp, setFavouritesProp}) => {

  const [searchStore, setSearchStore] = useState({
    typedInput: '',
    clickedFilter: '',
  });
  const [apiData, setApiData] = useState([]);
  const [spin, setSpin] = useState(false);

  const modifyTypedInput = () => {
    const arrFromInput = [];
    searchStore.typedInput.split('').map(arrItem => {
      if(arrItem === ' ') arrItem = '+';
      arrFromInput.push(arrItem);
    })
    return arrFromInput.join('');
  };

  const searchFunc = async(filterBtn = false) => {
    if(searchStore.typedInput){
      setSpin(true);
      let dataArr;
      try{
        let res;
        if(filterBtn === false){
          res = await fetch('/search/?term='+ modifyTypedInput() + searchStore.clickedFilter);
        }else{
          res = await fetch('/search/?term='+ modifyTypedInput() + '&media=' + filterBtn);
        }
        let data = await res.json();
        dataArr = data.results;
      }catch(err){
        console.error('err ',err);
        dataArr = [];
      }
      setApiData(dataArr);
      setSpin(false);
    }
  };

  const likeUnlikeFunc = (dataIndex) => {
    if(favouritesProp.length > 0){
      if(!favouritesProp.includes(apiData[dataIndex])){
        setFavouritesProp((prevState) => {
          return[
            ...prevState,
            apiData[dataIndex]
          ]
        })

        apiData[dataIndex].likeStatus = true;
      }else{
        const newFavouritesArr = favouritesProp.filter(favourite => favourite !== apiData[dataIndex]);
        setFavouritesProp(newFavouritesArr);
        apiData[dataIndex].likeStatus = false;
      }
    }else{
      setFavouritesProp((prevState) => {
        return[
          ...prevState,
          apiData[dataIndex]
        ]
      })

      apiData[dataIndex].likeStatus = true;
    }
  };

  return (
    <main className="container fluid text-center">
      <SearchComponent searchStoreProp={searchStore} setSearchStoreProp={setSearchStore} spinProp={spin} setSpinProp={setSpin} searchFuncProp={searchFunc}/>
      <FiltersComponent setSearchStoreProp={setSearchStore} searchFuncProp={searchFunc}/>
      <hr />
      <ResultsComponent apiDataProp={apiData} setApiDataProp={setApiData} likeUnlikeFuncProp={likeUnlikeFunc}/>
    </main >
  )
};
export default MainComponent;
/*
  * I first imported the useState hook from react.
  * I then imported the Search, Filters and Results components from the components folder.
  * I then created the MainComponent and destructured the favouritesProp and setFavouritesProp.
  * I then created a searchStore state object variable that has the typedInput and clickedFilter properties.
  * I then created the apiData state array variable .
  * I then created the spin boolean state variable.
  * I then created the modifyTypedInput function that replaces any empty space from the search input with a plus character so that it can be fit for being fetched by the API.
  * I then created the searchFunc which manages the searching of the user's input.
  * The searchFunc works only when there has been some user input.
  * It then allows the loading spin to spin and then fetches the desired results via the GET endpoint of the backend expressjs API.
  * After the try catch block executes the data from the API is stores in the apiData state array variable and the loading spinner is deactivated.
  * I then wrote the likeUnlikeFunc which enables the user to add or remove favourites in the favouritesProp.
  * It uses 2 major conditions. The first one performs operations if one favourite exists. It has 2 nested conditions that check if a favourites already exists or not.
  * The second major condition adds favourites if no favourites existed before.
  * Each condirion also creates a new object property in each favourite of it's like status.
  * I then wrote the JSX for the main part of the application.
  * I nested the Search, Filters and Results component in the main fragment passing props respectively to each of them as they need.
*/