import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import './MainComponent.css';
import {useState, useEffect} from 'react';

const MainComponent = () => {

  const [searchStore, setSearchStore] = useState({
    typedInput: '',
  });
  const [apiData, setApiData] = useState([]);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    apiData.map((dataPoint) => {
      console.log(`😜`, dataPoint.artistName);
    })
  }, [apiData])

  const typedInputChangeHandler = (event) => {
    setSpin(false);
    setSearchStore((prevState) => {
      return{
        ...prevState,
        typedInput: event.target.value
      }
    })
  };

  const searchFunc = async() => {
    if(searchStore.typedInput){
      setSpin(true);
      let dataArr;
      try{
        const res = await fetch('/search/?term='+ searchStore.typedInput);
        let data = await res.json();
        dataArr = data.results;
        console.log('dataArr ', dataArr);
      }catch(err){
        console.error('err ',err);
        dataArr = [];
      }
      setApiData(dataArr);
      setSpin(false);
    }
  };

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
        <p>Click to Apply Filters</p>
        <button className="btn btn-outline-secondary btn-sm mb-1 mx-1">movie</button>
        <button className="btn btn-outline-secondary btn-sm mb-1 mx-1">music</button>
        <button className="btn btn-outline-secondary btn-sm mb-1 mx-1">podcast</button>
        <button className="btn btn-outline-secondary btn-sm mb-1 mx-1">audiobook</button>
        <button className="btn btn-outline-secondary btn-sm mb-1 mx-1">short film</button>
        <button className="btn btn-outline-secondary btn-sm mb-1 mx-1">TV show</button>
        <button className="btn btn-outline-secondary btn-sm mb-1 mx-1">software</button>
        <button className="btn btn-outline-secondary btn-sm mb-1 mx-1">ebook</button>
        <button className="btn btn-outline-secondary btn-sm mb-1 mx-1">All</button>
        <button className="btn btn-outline-secondary btn-sm mb-1 mx-1 trial-btn">Trial</button>
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
                        <p className="card-text"><small className="text-muted">Like<a href="#" type="button" className="nav-link like-icons"><FontAwesomeIcon icon={faHeartRegular} className="font-awesome-icon-component" /></a></small></p>
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
            : null
        }
      </section >
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