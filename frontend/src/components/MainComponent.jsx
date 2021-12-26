import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import './MainComponent.css';
import {useState, useEffect} from 'react';

const MainComponent = ({favouritesProp, setFavouritesProp}) => {

  // https://itunes.apple.com/search?term=jack+johnson&media=movie
  const filterBtnStyling = "btn btn-outline-secondary btn-sm mb-1 mx-1";
  const [searchStore, setSearchStore] = useState({
    typedInput: '',
    clickedFilter: '',
  });
  const [apiData, setApiData] = useState([]);
  const [spin, setSpin] = useState(false);

  const typedInputChangeHandler = (event) => {
    setSpin(false);
    setSearchStore((prevState) => {
      return{
        ...prevState,
        typedInput: event.target.value
      }
    })
  };

  const filterBtnClickHandler = (filterBtn) => {
    setSearchStore((prevState) => {
      return{
        ...prevState,
        clickedFilter: `&media=${filterBtn}`
      }
    })
    searchFunc(filterBtn);
  };

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
        console.log('dataArr ', dataArr);
        console.log('/search/?term='+ modifiedTypedInput + searchStore.clickedFilter);
        console.log('/search/?term='+ modifiedTypedInput + '&media=' + filterBtn);
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
  useEffect(() => {
    console.log(`favouritesProp`, favouritesProp);
  }, [favouritesProp])
  // https://itunes.apple.com/search?term=jack+johnson&media=movie
  // jack johnson

  return (
    <main className="container fluid text-center">
      <section className="row justify-content-md-start mt-3 mb-3 gy-3">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">What</span>
          <input type="text" className="form-control" placeholder="movie, music, podcast, audiobook, short film, TV show, software, ebook" aria-label="" aria-describedby="basic-addon1" value={searchStore.typedInput} onChange={typedInputChangeHandler}/>
          &nbsp;
          <button className="btn" type="button" id="search-btn" onClick={() => searchFunc()}>
            {spin ? 
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              :
              null
            }
            &nbsp;SEARCH
          </button>
        </div>
      </section>
      <section id="filters-section">
        <p>Click to Apply Filters jack johnson</p>
        <div className="btn-group flex-wrap" id="btn-group" role="group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradioMovie"/>
          <label className={filterBtnStyling}  htmlFor="btnradioMovie" onClick={() => {filterBtnClickHandler("movie")}}>movie</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradioMusic"/>
          <label className={filterBtnStyling}  htmlFor="btnradioMusic" onClick={() => {filterBtnClickHandler("music")}}>music</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradioMusicVideo"/>
          <label className={filterBtnStyling}  htmlFor="btnradioMusicVideo" onClick={() => {filterBtnClickHandler("musicVideo")}}>music video</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradioPodcast"/>
          <label className={filterBtnStyling}  htmlFor="btnradioPodcast" onClick={() => {filterBtnClickHandler("podcast")}}>podcast</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradioAudiobook"/>
          <label className={filterBtnStyling}  htmlFor="btnradioAudiobook" onClick={() => {filterBtnClickHandler("audiobook")}}>audiobook</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradioShortFilm"/>
          <label className={filterBtnStyling}  htmlFor="btnradioShortFilm" onClick={() => {filterBtnClickHandler("shortFilm")}}>short film</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradioTvShow"/>
          <label className={filterBtnStyling}  htmlFor="btnradioTvShow" onClick={() => {filterBtnClickHandler("tvShow")}}>TV show</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradioSoftware"/>
          <label className={filterBtnStyling}  htmlFor="btnradioSoftware" onClick={() => {filterBtnClickHandler("software")}}>software</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradioEbook"/>
          <label className={filterBtnStyling}  htmlFor="btnradioEbook" onClick={() => {filterBtnClickHandler("ebook")}}>ebook</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradioAll"/>
          <label className={filterBtnStyling}  htmlFor="btnradioAll" onClick={() => {filterBtnClickHandler("all")}}>All</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradioTrial"/>
          <label className={filterBtnStyling}  htmlFor="btnradioTrial" onClick={() => {}}>Trial</label>
        </div>
      </section>
      <hr />
      <section className="row justify-content-md-center mt-3 mb-3 gy-3">
        {apiData.length > 1 ?
          apiData.map((dataPoint, index) => {
            return (
              <div className="col-sm-6" key={index}>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={dataPoint.artworkUrl100} alt="spurgeon's art potrait" className="img-fluid rounded-start" />
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
                        <p className="card-text"><small className="text-muted small-like-tag" onClick={() => likeUnlikeFunc(index) }>{dataPoint.likeStatus ?  'Unlike' : 'Like'}<a href="#" type="button" className="nav-link like-icons"><FontAwesomeIcon icon={faHeartRegular} className="font-awesome-icon-component" /></a></small></p>
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