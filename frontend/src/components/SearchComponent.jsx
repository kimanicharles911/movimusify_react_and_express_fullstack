import './SearchComponent.css';

// * I imported the CSS file for this component.

const SearchComponent = ({searchStoreProp, setSearchStoreProp, spinProp, setSpinProp, searchFuncProp}) => {

  const typedInputChangeHandler = (event) => {
    setSpinProp(false);
    setSearchStoreProp((prevState) => {
      return{
        ...prevState,
        typedInput: event.target.value
      }
    })
  };

  /* 
    * I created the SearchComponent
    * I created the typedInputChangeHandler function that receives an event as a parameter.
    * Once the typedInputChangeHandler is called, it sets the spinProp to false.
    * It then updates the searchStoreProp to have the most recent input value from the search bar.
  */

  return(
    <section className="row justify-content-md-start mt-3 mb-3 gy-3">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">What</span>
          <input type="text" className="form-control" placeholder="movie, music, podcast, audiobook, short film, TV show, software, ebook" aria-label="" aria-describedby="basic-addon1" value={searchStoreProp.typedInput} onChange={typedInputChangeHandler}/>
          &nbsp;
          <button className="btn" type="button" id="search-btn" onClick={() => searchFuncProp()}>
            {spinProp ? 
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              :
              null
            }
            &nbsp;SEARCH
          </button>
        </div>
      </section>
  )
};
export default SearchComponent;
/* 
  * I wrote the JSX for this component.
  * The main elements are the search bar and the search button.
  * The search bar has its value set from the typedInput property of the searchStoreProp.
  * The search bar calls the typedInputChangeHandler function when the value of the search bar changes.
  * The search button calls the searchFuncProp function when clicked. A spin loader in it is also activated when it is clicked.
*/