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
      <SearchComponent searchStoreProp={searchStore} setSearchStoreProp={setSearchStore}spinProp={spin} setSpinProp={setSpin} searchFuncProp={searchFunc}/>
      <FiltersComponent setSearchStoreProp={setSearchStore} searchFuncProp={searchFunc}/>
      <hr />
      <ResultsComponent apiDataProp={apiData} setApiDataProp={setApiData} likeUnlikeFuncProp={likeUnlikeFunc}/>
    </main >
  )
};
export default MainComponent;
/*
  * I wrote the JSX for the main part of the application.
  * The main function in the application is a map function that creates bootstrap cards with the name and description of each repository it loops through.
  * The other main JSX items are the Delete, Edit and View Buttons which are used to open their respective modals. They also send the repository name to the repoNameReceiverFunc function so as to enable identification of the project the user is interacting with.
  * I then wrapped the other three main components i.e ViewModalComponent, EditModalComponent and DeleteModalComponent.
  * In each of the above components I passed the props needed for the modal to operate as expected.
*/