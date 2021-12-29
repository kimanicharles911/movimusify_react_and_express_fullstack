import './FiltersComponent.css';

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

  return(
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
      </div>
    </section>
  )
}
export default FiltersComponent;