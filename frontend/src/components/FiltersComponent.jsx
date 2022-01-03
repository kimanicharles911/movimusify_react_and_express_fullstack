import './FiltersComponent.css';
// I imported the css file for this component.

const FiltersComponent = ({setSearchStoreProp, searchFuncProp}) => {

  const filterBtnStyling = "btn btn-outline-secondary btn-sm mb-1 mx-1";

  const filterBtnClickHandler = (filterBtn) => {
    setSearchStoreProp((prevState) => {
      return{
        ...prevState,
        clickedFilter: `&media=${filterBtn}`
      }
    })
    searchFuncProp(filterBtn);
  };

  /* 
    * I created the FiltersComponent and destructured the setSearchStoreProp and searchFuncProp.
    * I created the filterBtnStyling variable and assigned it the bootstrap class I want to apply to the filter buttons.
    * I created a filterBtnClickHandler function that takes in a filterBtn as a parameter.
    * This function sets the media type to be fetched from the API. Iy also calls the searchFuncProp which immediately fetches the media from the API.  
  */

  return(
    <section id="filters-section">
      <p>Click to Apply Filters</p>
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
      </div>
    </section>
  )
}
export default FiltersComponent;
/* 
  * I wrote the JSX for the FiltersComponent. I heavily utilised the radio button groups from bootstrap found here https://getbootstrap.com/docs/5.1/components/button-group/#checkbox-and-radio-button-groups
  * When each button is clicked it calls the filterBtnClickHandler function and passes the type of media as the parameter value.
*/