import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FavouritesComponent = ({favouritesProp, setFavouritesProp}) => {

  const unlikeFunc = (dataIndex) => {
    const newFavouritesArr = favouritesProp.filter(favourite => favourite !== favouritesProp[dataIndex]);
    setFavouritesProp(newFavouritesArr);
  };

  return(
    <main className="container fluid text-center">
      <section className="row justify-content-md-center mt-3 mb-3 gy-3">
        {favouritesProp.length > 0 ?
          favouritesProp.map((dataPoint, index) => {
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
                        <p className="card-text"><small className="text-muted small-like-tag" onClick={() => unlikeFunc(index) }>{dataPoint.likeStatus ?  'Unlike' : 'Like'}<a type="button" className="nav-link like-icons"><FontAwesomeIcon icon={faHeart} className="font-awesome-icon-component" /></a></small></p>
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
          : "You have not liked any media so far. Please start by liking and come back here to view them as your favourites."
        }
      </section>
    </main>
  )
};

export default FavouritesComponent;