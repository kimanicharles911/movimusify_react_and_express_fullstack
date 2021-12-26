import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import {useState} from 'react';

const FavouritesComponent = ({favouritesProp, setFavouritesProp}) => {

  const [spin, setSpin] = useState(false);
  const likeUnlikeFunc = () => {

  };

  return(
    <main className="container fluid text-center">
      <section className="row justify-content-md-center mt-3 mb-3 gy-3">
        {favouritesProp.length > 1 ?
          favouritesProp.map((dataPoint, index) => {
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
    </main>
  )
};

export default FavouritesComponent;