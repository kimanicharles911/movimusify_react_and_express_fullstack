import './SearchComponent.css';

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