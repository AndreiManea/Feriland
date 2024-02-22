import './SliderSection.css';

function SliderSection() {
  return (
    <div className="slider-section">
      <div className="slider-text-container">
        <div className="divider">
          <div className="line"></div>
          <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb736094ba4a4473a3011e_abc.svg" 
               loading="lazy" alt="" className="image-2" />
          <div className="line"></div>
        </div>
        <div className="text-500"></div>
      </div>
      <div className="slider-container">
        <div className="tricks-slider flickity-enabled is-draggable" tabIndex={0}>
          <div className="flickity-viewport">
            <div className="flickity-slider"></div>
          </div>
          <div className="flickity-button flickity-prev-next-button previous" aria-label='previous'></div>
          <div className="flickity-button flickity-prev-next-button next"></div> 
        </div>
        <div className="progress">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  )
}

export default SliderSection