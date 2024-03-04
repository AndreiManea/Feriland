import './SliderSection.css';
import Flickity from 'flickity';
import 'flickity/css/flickity.css'; // Import Flickity CSS
import { useEffect, useRef } from 'react';


const  SliderSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      new Flickity(sliderRef.current, {
        // Flickity options can be added here
        // Example: contain: true to contain cells within the slider container
      });
    }
  }, []);
  
  return (
    <div className="slider-section">
      <div className="slider-text-container">
        <div className="divider">
          <div className="line"></div>
          <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb736094ba4a4473a3011e_abc.svg" 
               loading="lazy" alt="" className="image-2" />
          <div className="line"></div>
        </div>
        <div className="text-500">
          <h2 className='heading-2 dark'>
            Activities in Feriland
          </h2>
          <p className="text-size-regular center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          </p>
        </div>
      </div>
      {/* TO ADD DRAG FUNCTIONALITY  */}
      <div className="slider-container" ref={sliderRef}>
        <div className="tricks-slider flickity-enabled is-draggable" tabIndex={0}>
          <div className="flickity-viewport">
            <div className="flickity-slider">
              <div className="tricks-slider-slide is-selected" id="firstEl">
                <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6a680710a6aed4d4470b_california-vineyards-santa-barbara%20(1).jpg" 
                     loading="lazy" 
                     sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 85vw, (max-width: 1279px) 78vw, (max-width: 1439px) 79vw, (max-width: 1919px) 1139.03125px, 61vw" 
                     srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6a680710a6aed4d4470b_california-vineyards-santa-barbara%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6a680710a6aed4d4470b_california-vineyards-santa-barbara%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6a680710a6aed4d4470b_california-vineyards-santa-barbara%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6a680710a6aed4d4470b_california-vineyards-santa-barbara%20(1)-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6a680710a6aed4d4470b_california-vineyards-santa-barbara%20(1).jpg 2000w" 
                     alt="" className="image" id="firstImg"/>
                <div className="card-text-wrapper">
                  <h3 className="card-header">Wine Fields</h3>
                  <p className="text-size-regular max-width-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                  </p>
                </div>
              </div>
              <div className="tricks-slider-slide" aria-hidden="true" id="secondEl">
                <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6d918848db73b0af7f4d_male-cyclist-riding-bicycle-morning%20(1).jpg" 
                     loading="lazy" 
                     sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 85vw, (max-width: 1279px) 78vw, (max-width: 1439px) 79vw, (max-width: 1919px) 1139.03125px, 61vw" 
                     srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6d918848db73b0af7f4d_male-cyclist-riding-bicycle-morning%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6d918848db73b0af7f4d_male-cyclist-riding-bicycle-morning%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6d918848db73b0af7f4d_male-cyclist-riding-bicycle-morning%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6d918848db73b0af7f4d_male-cyclist-riding-bicycle-morning%20(1)-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6d918848db73b0af7f4d_male-cyclist-riding-bicycle-morning%20(1).jpg 2000w" 
                     alt="" className="image" id="secondImg" />
                <div className="card-text-wrapper">
                  <h3 className="card-header">Bike Trails</h3>
                  <p className="text-size-regular max-width-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                  </p>
                </div>
              </div>
              <div className="tricks-slider-slide" aria-hidden="true" id="thirdEl">
                <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6c69b51d23f6b756ba3c_sunrise-view-morning-mountains%20(1).jpg" 
                     loading="lazy" 
                     sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 85vw, (max-width: 1279px) 78vw, (max-width: 1439px) 79vw, (max-width: 1919px) 1139.03125px, 61vw" 
                     srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6c69b51d23f6b756ba3c_sunrise-view-morning-mountains%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6c69b51d23f6b756ba3c_sunrise-view-morning-mountains%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6c69b51d23f6b756ba3c_sunrise-view-morning-mountains%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6c69b51d23f6b756ba3c_sunrise-view-morning-mountains%20(1)-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6c69b51d23f6b756ba3c_sunrise-view-morning-mountains%20(1).jpg 2000w" 
                     alt="" className="image" id="thirdImg" />
                <div className="card-text-wrapper">
                  <h3 className="card-header">Untouched Forest</h3>
                  <p className="text-size-regular max-width-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                  </p>
                </div>
              </div>
              <div className="tricks-slider-slide" aria-hidden="true" id="fourthEl">
                <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6f7b41e27be6aab002a0_pexels-pixabay-433155.jpg" 
                     loading="lazy" 
                     sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 85vw, (max-width: 1279px) 78vw, (max-width: 1439px) 79vw, (max-width: 1919px) 1139.03125px, 61vw" 
                     srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6f7b41e27be6aab002a0_pexels-pixabay-433155-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6f7b41e27be6aab002a0_pexels-pixabay-433155-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6f7b41e27be6aab002a0_pexels-pixabay-433155-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6f7b41e27be6aab002a0_pexels-pixabay-433155-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6f7b41e27be6aab002a0_pexels-pixabay-433155.jpg 1920w" 
                     alt="" className="image" id="fourthImg" />
                <div className="card-text-wrapper">
                  <h3 className="card-header">Calm &amp; Silence</h3>
                  <p className="text-size-regular max-width-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                  </p>
                </div>
              </div>
              <div className="tricks-slider-slide" aria-hidden="true" id="fifthEl">
                <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors.jpg" 
                    loading="lazy" 
                    width="500.5" 
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 85vw, (max-width: 1279px) 78vw, (max-width: 1439px) 79vw, (max-width: 1919px) 1139.03125px, 61vw" 
                    alt="" 
                    srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors.jpg 1001w" 
                    className="image" id="fifthImg" />
                <div className="card-text-wrapper">
                  <h3 className="card-header">Ciubar</h3>
                  <p className="text-size-regular max-width-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                  </p>
                </div>
              </div>
              <div className="tricks-slider-slide" aria-hidden="true" id="sixthEl">
                <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6e7b3607acd868849df0_vertical-shot-ringnecked-pheasant-perched-branch%20(1).jpg" 
                     loading="lazy" 
                     sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 85vw, (max-width: 1279px) 78vw, (max-width: 1439px) 79vw, (max-width: 1919px) 1139.03125px, 61vw" 
                     srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6e7b3607acd868849df0_vertical-shot-ringnecked-pheasant-perched-branch%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6e7b3607acd868849df0_vertical-shot-ringnecked-pheasant-perched-branch%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6e7b3607acd868849df0_vertical-shot-ringnecked-pheasant-perched-branch%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6e7b3607acd868849df0_vertical-shot-ringnecked-pheasant-perched-branch%20(1).jpg 1600w" 
                     alt="" className="image" id="sixthImg"/>
                <div className="card-text-wrapper">
                  <h3 className="card-header">Wild Life</h3>
                  <p className="text-size-regular max-width-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="flickity-button flickity-prev-next-button previous" aria-label='previous'>
            <svg className="flickity-button-icon" viewBox="0 0 100 100">
              <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" />
            </svg>
          </button>
          <button className="flickity-button flickity-prev-next-button next" aria-label='next'>
            <svg className="flickity-button-icon" viewBox="0 0 100 100">
              <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" transform="translate(100, 100) rotate(180) " />
            </svg>
          </button> 
        </div>
        <div className="progress">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  )
}

export default SliderSection