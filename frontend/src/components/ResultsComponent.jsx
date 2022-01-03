import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import './ResultsComponent.css';

/* 
  * 
  * I imported FontAwesomeIcon component from @fortawesome/react-fontawesome.
  * I imported the two faHeart components @fortawesome library.
  * I imported the CSS file for this component.
*/

const ResultsComponent = ({apiDataProp, likeUnlikeFuncProp, spinProp}) => {

  return(
    <section className="row justify-content-md-center mt-3 mb-3 gy-3">
        {apiDataProp.length > 0 ?
          apiDataProp.map((dataPoint, index) => {
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
                        <p className="card-text"><small className="text-muted small-like-tag" onClick={() => likeUnlikeFuncProp(index) }>{dataPoint.likeStatus ?  'Unlike' : 'Like'}<a type="button" className="nav-link like-icons"><FontAwesomeIcon icon={dataPoint.likeStatus ? faHeart :faHeartRegular} className="font-awesome-icon-component" /></a></small></p>
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
          spinProp ? 
            <div className="spinner-border" id="spinner-border" role="status">
              <span className="visually-hidden">Loading..</span>
            </div>
            : "Search results will appear here"
        }
      </section>
  )
}
export default ResultsComponent;
/* 
  * I created the ResultsComponent.
  * I wrote the JSX for this component.
  * The JSX has a condition that divides the JSX into three main parts:
  * 1. The first part that dynamically renders the media returned from the backend 3rd party API in a manner that the client can relate with. It is only returned after the user has searched for media.
  * 2. The second part that starts the loading spinner inidcator immediately the user click on the search or filter button.
  * 3. The third part that displays a relevant message if the user has not searched for media yet.
  * I then export the ResultsComponent.
*/