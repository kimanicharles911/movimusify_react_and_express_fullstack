import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import './MainComponent.css';
import {useState} from 'react';
import {SearchComponent, FiltersComponent} from './index.js';

const MainComponent = ({favouritesProp, setFavouritesProp}) => {

  const [searchStore, setSearchStore] = useState({
    typedInput: '',
    clickedFilter: '',
  });
  const [apiData, setApiData] = useState([]);
  const [spin, setSpin] = useState(false);

  const searchFunc = async(filterBtn = false) => {
    if(searchStore.typedInput){
      const arrFromInput = [];
      searchStore.typedInput.split('').map(arrItem => {
        if(arrItem === ' ') arrItem = '+';
        arrFromInput.push(arrItem);
      })
      let modifiedTypedInput = arrFromInput.join('');
      setSpin(true);
      let dataArr;
      try{
        let res;
        if(filterBtn === false){
          res = await fetch('/search/?term='+ modifiedTypedInput + searchStore.clickedFilter);
        }else{
          res = await fetch('/search/?term='+ modifiedTypedInput + '&media=' + filterBtn);
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
      <section className="row justify-content-md-center mt-3 mb-3 gy-3">
        {apiData.length > 0 ?
          apiData.map((dataPoint, index) => {
            return (
              <div className="col-sm-6" key={index}>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={dataPoint.artworkUrl100} alt="media art image" className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title"><strong>{dataPoint.trackName}</strong> by {dataPoint.artistName}</h5>
                        <p className="card-text">Cost: ${dataPoint.trackPrice} Dollars</p>
                        <span>&nbsp;|&nbsp;</span>
                        <p className="card-text">Genre: {dataPoint.primaryGenreName}</p>
                        <br/>
                        <p className="card-text"><small className="text-muted">Kind: {dataPoint.kind}</small></p>
                        <span>&nbsp;|&nbsp;</span>
                        <p className="card-text"><small className="text-muted small-like-tag" onClick={() => likeUnlikeFunc(index) }>{dataPoint.likeStatus ?  'Unlike' : 'Like'}<a type="button" className="nav-link like-icons"><FontAwesomeIcon icon={dataPoint.likeStatus ? faHeart :faHeartRegular} className="font-awesome-icon-component" /></a></small></p>
                        <p className="card-text">Description: {dataPoint.description ? dataPoint.description : null } {dataPoint.description === undefined && dataPoint.shortDescription ? dataPoint.shortDescription : "Not available." } </p>
                        <br />
                        <p className="card-text">Long Description: {dataPoint.longDescription ? dataPoint.longDescription : "Not available." }</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          :
          spin ? 
            <div className="spinner-border" id="spinner-border" role="status">
              <span className="visually-hidden">Loading..</span>
            </div>
            : "Search results will appear here"
        }
      </section>
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