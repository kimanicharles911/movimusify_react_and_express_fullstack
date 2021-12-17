import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import './MainComponent.css';
import { SpurgeonPortrait } from '../images'

/* 
  * I imported the FontAwesomeIcon component, faTrash, faPen and faEye icons which are all products of the font-awesome library.
  * I imported the css style file i.e MainComponent.css
  * I then imported the useEffect & useState hook from react.
  * I imported the ViewModalComponent, EditModalComponent and DeleteModalComponent from the components folder.
*/

const MainComponent = () => {

  /* 
    * I created the MainComponent and destructured the renderAgentProp and setRenderAgentProp.
    * I created a state variable called repositories and setRepositories and set it's default value to an empty array. It is where all repositories from the API will be stored.
    * I created a state variable called modalData and setModalData and set it's default value to an object whose keys are empty strings. It is where all the repository data of the project the user is interacting with is stored.
    * I used a useEffect hook to fetch data from the backend API when the application starts and when there is a change in the boolean value of the renderAgentProp.
    * I created the repoNameReceiverFunc function which receives the project name of the project the user is interacting with and then all of the data of that project is stored in the modalData state variable.   
  */

  return (
    <main className="container fluid text-center">
      <section className="row justify-content-md-start mt-3 mb-3 gy-3">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">What</span>
          <input type="text" className="form-control" placeholder="movie, music, podcast, audiobook, short film, TV show, software, ebook" aria-label="" aria-describedby="basic-addon1" />
          &nbsp;
          <button className="btn" id="search-btn">SEARCH</button>
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
      <section className="row justify-content-md-start mt-3 mb-3 gy-3">
        <div className="col-sm-6">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={SpurgeonPortrait} alt="spurgeon's art potrait" className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><strong>Thy Hand, O God, Has Guided</strong> by Westminster Chapel</h5>
                  <p className="card-text">Cost: 17 Dollars</p>
                  <span>&nbsp;|</span>
                  <p className="card-text">Genre: Congregational Hymn</p>
                  <br />
                  <p className="card-text"><small className="text-muted">Rating: 4</small></p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="card-text"><small className="text-muted">Kind: Music</small></p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="card-text"><small className="text-muted">Like<a href="#" type="button" className="nav-link like-icons"><FontAwesomeIcon icon={faHeartRegular} className="font-awesome-icon-component" /></a></small></p>
                  <p className="card-text">Description: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                  <br />
                  <p className="card-text">Long Description: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={SpurgeonPortrait} alt="spurgeon's art potrait" className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><strong>The Road to the Reformation: Wycliffe to Luther</strong> by Steven Lawson</h5>
                  <p className="card-text">Cost: 33 Dollars</p>
                  <span>&nbsp;|</span>
                  <p className="card-text">Genre: History Study</p>
                  <br />
                  <p className="card-text"><small className="text-muted">Rating: 5</small></p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="card-text"><small className="text-muted">Kind: Short Film</small></p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="card-text"><small className="text-muted">Unlike<a href="#" type="button" className="nav-link like-icons"><FontAwesomeIcon icon={faHeart} className="font-awesome-icon-component" /></a></small></p>
                  <p className="card-text">Description: Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                  <br />
                  <p className="card-text">Long Description: Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={SpurgeonPortrait} alt="spurgeon's art potrait" className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><strong>Come, Christians, join to sing</strong> by Grace Community Church</h5>
                  <p className="card-text">Cost: 65 Dollars</p>
                  <span>&nbsp;|</span>
                  <p className="card-text">Genre: Congregational Hymn</p>
                  <br />
                  <p className="card-text"><small className="text-muted">Rating: 3</small></p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="card-text"><small className="text-muted">Kind: Music</small></p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="card-text"><small className="text-muted">Like<a href="#" type="button" className="nav-link like-icons"><FontAwesomeIcon icon={faHeartRegular} className="font-awesome-icon-component" /></a></small></p>
                  <p className="card-text">Description: It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <br />
                  <p className="card-text">Long Description: If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
              </div>
            </div>
          </div>
        </div >
        <div className="col-sm-6">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={SpurgeonPortrait} alt="spurgeon's art potrait" className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><strong>Thy Hand, O God, Has Guided</strong> by Westminster Chapel</h5>
                  <p className="card-text">Cost: 17 Dollars</p>
                  <span>&nbsp;|</span>
                  <p className="card-text">Genre: Congregational Hymn</p>
                  <br />
                  <p className="card-text"><small className="text-muted">Rating: 4</small></p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="card-text"><small className="text-muted">Kind: Music</small></p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="card-text"><small className="text-muted">Unlike<a href="#" type="button" className="nav-link like-icons"><FontAwesomeIcon icon={faHeart} className="font-awesome-icon-component" /></a></small></p>
                  <p className="card-text">Description: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                  <br />
                  <p className="card-text">Long Description: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
              </div>
            </div>
          </div>
        </div >
        <div className="col-sm-6">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={SpurgeonPortrait} alt="spurgeon's art potrait" className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><strong>The Road to the Reformation: Wycliffe to Luther</strong> by Steven Lawson</h5>
                  <p className="card-text">Cost: 33 Dollars</p>
                  <span>&nbsp;|</span>
                  <p className="card-text">Genre: History Study</p>
                  <br />
                  <p className="card-text"><small className="text-muted">Rating: 5</small></p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="card-text"><small className="text-muted">Kind: Short Film</small></p>
                  <span>&nbsp;|&nbsp;</span>
                  <p className="card-text"><small className="text-muted">Like<a href="#" type="button" className="nav-link like-icons"><FontAwesomeIcon icon={faHeartRegular} className="font-awesome-icon-component" /></a></small></p>
                  <p className="card-text">Description: Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                  <br />
                  <p className="card-text">Long Description: Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections.</p>
                </div>
              </div>
            </div>
          </div>
        </div >
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